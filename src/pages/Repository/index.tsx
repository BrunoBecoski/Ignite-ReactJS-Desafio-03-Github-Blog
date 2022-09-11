import { useEffect, useState } from 'react';

import { api } from '../../lib/axios';
import { Banner } from '../../components/Banner';
import { Card } from '../../components/Card';
import { Loading } from '../../components/Loading';
import { Input } from '../../components/Input';

import { BlogContainer, Title, Cards } from './styles';
import { useParams } from 'react-router-dom';

interface RepositoryInfo {
  name: string;
  createdAt: string;
  htmlUrl: string;
  description: string;
  stargazersCount: number;
  openIssues: number;
}

interface Issue {
  title: string;
  createdAt: string;
  body: string;
  number: number;
}

export function Repository() {
  const { user, repository } = useParams();

  const [search, setSearch] = useState('');
  const [repositoryInfo, setRepositoryInfo] = useState({} as RepositoryInfo);
  const [isLoadingRepositoryInfo, setIsLoadingRepositoryInfo] = useState(true);
  const [isLoadingIssues, setIsLoadingIssues] = useState(true);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [firstRender, setFirstRender] = useState(true);

  async function fetchRepository() {
    const { data } = await api.get(`repos/${user}/${repository}`);

    setRepositoryInfo({
      name: data.name,
      createdAt: data.created_at,
      htmlUrl: data.html_url,
      description: data.description,
      stargazersCount: data.stargazers_count,
      openIssues: data.open_issues,
    });
    setIsLoadingRepositoryInfo(false);
  }

  async function fetchIssues() {
    const { data } = await api.get(`/search/issues?q=${search}%20repo:${user}/${repository}`);

    const issuesItems = data.items.map((issue: any) => (
      {
        number: issue.number,
        title: issue.title,
        createdAt: issue.created_at,
        body: issue.body,
      }
    ));

    setIssues(issuesItems);
    setIsLoadingIssues(false);
  }

  useEffect(() => {
    fetchRepository();
    fetchIssues();
  }, []);

  useEffect(() => {
    setIsLoadingIssues(true);
    if(firstRender) {
      setFirstRender(false);
    } else {
      const timeout = setTimeout(async () => {
        fetchIssues();
      }, 3000);
  
      return () => clearTimeout(timeout);
    }  
  }, [search]);

  return (
    <BlogContainer>
      {
        isLoadingRepositoryInfo
          ?
          <Loading />
          :
          <Banner 
            repository={repositoryInfo}
          />
      }

      <Title>
        <h3>Publicações</h3>
        <span>{issues.length} {issues.length <= 1 ? 'publicação' : 'publicações'} </span>
      </Title>

      <Input
        placeholder="Buscar contéudo"
        onChange={props => setSearch(props.target.value)}
      />

      <Cards>
        { isLoadingIssues
          ? 
            <div className="loading">
              <Loading />
              <Loading />
            </div>
          : 
            <>
              {
                issues.map(issue => (
                  <Card
                    key={issue.number}
                    issue={issue}
                  />
                ))
              }
            </>
        }
      </Cards>
        
    </BlogContainer>
  );
}