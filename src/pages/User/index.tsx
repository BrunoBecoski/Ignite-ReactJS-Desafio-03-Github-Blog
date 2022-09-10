import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../lib/axios';
import { Banner } from '../../components/Banner';
import { Input } from '../../components/Input';

import { Cards, UserContainer } from './styles';
import { Loading } from '../../components/Loading';
import { Card } from '../../components/Card';

interface UserInfo {
  avatarUrl: string;
  bio: string;
  company: string;
  following: number;
  htmlUrl: string;
  name: string;
  login: string;
}

interface Repository {
  name: string;
  description: string;
  createdAt: string;
  issues: number,
}


export function User() {
  const { user } = useParams();

  const [userInfo, setUserInfo] = useState({} as UserInfo);
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);
  const [isLoadingRepositories, setIsLoadingRepositories] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [search, setSearch] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function fetchUser() {
    const { data } = await api.get(`/users/${user}`);

    setUserInfo({
      avatarUrl: data.avatar_url,
      bio: data.bio,
      company: data.company,
      following: data.following,
      htmlUrl: data.html_url,
      name: data.name,
      login: data.login,
    });
    setIsLoadingUserInfo(false);
  }

  useEffect(() => {
    fetchUser();
    fetchRepositories();
  }, []);

  async function fetchRepositories() {
    const { data } = await api.get(`/users/${user}/repos?per_page=100`);

    const repositoriesFilter = data.filter((repository: any) => repository.open_issues >= 1);

    const repositoriesMap = repositoriesFilter.map((repository: any) => {
      return {
        name: repository.name,
        description: repository.description,
        createdAt: repository.created_at,
        issues: repository.open_issues,
      }
    });

    setRepositories(repositoriesMap);
    setIsLoadingRepositories(false);
  }

  return (
    <UserContainer>
      {
        isLoadingUserInfo
          ?
          <Loading />
          :
          <Banner
            user={userInfo}
          />
      }

      <Input
        placeholder="Buscar repositório"
        onChange={event => setSearch(event.target.value)}
      />

      <Cards>
        {
          isLoadingRepositories
            ?
              <>
                <Loading />
                <Loading />
              </>
            :
              repositories.map(repository =>
                <Card
                  key={repository.name}
                  repository={repository}
                />
              )
          }
      </Cards>
    </UserContainer>
  );
}