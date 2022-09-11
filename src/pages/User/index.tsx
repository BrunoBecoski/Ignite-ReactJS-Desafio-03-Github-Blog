import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../lib/axios';
import { Banner } from '../../components/Banner';
import { Input } from '../../components/Input';
import { Loading } from '../../components/Loading';
import { Card } from '../../components/Card';

import { Cards, UserContainer } from './styles';

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
  openIssues: number,
}

export function User() {
  const { user } = useParams();

  const [search, setSearch] = useState('');
  const [userInfo, setUserInfo] = useState({} as UserInfo);
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);
  const [isLoadingRepositories, setIsLoadingRepositories] = useState(true);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [searchedRepositories, setSearchedRepositories] = useState<Repository[]>([]);

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

  async function fetchRepositories() {
    const { data } = await api.get(`/users/${user}/repos?per_page=100&sort=created`);

    const repositoriesFilter = data.filter((repository: any) => repository.open_issues >= 1);

    const repositoriesMap = repositoriesFilter.map((repository: any) => {
      return {
        name: repository.name,
        description: repository.description,
        createdAt: repository.created_at,
        openIssues: repository.open_issues,
      }
    });

    setRepositories(repositoriesMap);
    setIsLoadingRepositories(false);
  }

  function searchRepository() {
    const regex = new RegExp("" + search.toLocaleLowerCase() + "");
    const result = repositories.filter(repository => regex.test(repository.name.toLocaleLowerCase()));

    setSearchedRepositories(result);
    setIsLoadingRepositories(false);
  }
  
  useEffect(() => {
    fetchUser();
    fetchRepositories();
  }, []);

  useEffect(() => {
    setIsLoadingRepositories(true);
      const timeout = setTimeout( () => {
        searchRepository();
      }, 500);
  
      return () => clearTimeout(timeout);    
  }, [search]);

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

            search
            ? 
              searchedRepositories.map(repository =>
                <Card
                  key={repository.name}
                  repository={repository}
                />
              )
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