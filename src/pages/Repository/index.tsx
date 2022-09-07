import { useEffect, useState } from 'react';

import { api } from '../../lib/axios';
import { Loading } from '../../components/Loading';
import { Header } from './components/Header';
import { Input } from '../../components/Input';
import { Card } from './components/Card';

import { BlogContainer, Title, Cards } from './styles';

interface Issue {
  title: string;
  created_at: string;
  body: string;
  number: number;
}

interface IssuesResponse {
  items: Issue[];
}

export function Repository() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [search, setSearch] = useState('');
  const [isLoadingIssues, setIsLoadingIssues] = useState(true);


  const [firstRender, setFirstRender] = useState(true);

  const username = 'rocketseat-education';
  const repo = 'reactjs-github-blog-challenge'
  // const repo = 'bootcamp-gostack-desafios';
  
  async function fetchIssues() {
    const response = await api.get<IssuesResponse>(`/search/issues?q=${search}%20repo:${username}/${repo}`);
    const { data } = response;

    const issuesItems = data.items.map((issue) => (
      {
        number: issue.number,
        title: issue.title,
        created_at: issue.created_at,
        body: issue.body,
      }
    ));

    setIssues(issuesItems);
    setIsLoadingIssues(false);
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  useEffect(() => {
    setIsLoadingIssues(true);
    if(firstRender) {
      setFirstRender(false);
    } else {
      const timeout = setTimeout(async () => {
        fetchIssues();
      }, 5000);
  
      return () => clearTimeout(timeout);
    }  
  }, [search])

  return (
    <BlogContainer>
      <Header />

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