import { useEffect, useState } from 'react';

import { api } from '../../lib/axios';
import { Profile } from './components/Profile';
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

export function Blog() {
  const [issues, setIssues] = useState<Issue []>([]);

  useEffect(() => {
    async function fetchIssues() {
      const { data } = await api.get<IssuesResponse>('/search/issues?q=repo:rocketseat-education/reactjs-github-blog-challenge');
      // const { data } = await api.get<IssuesResponse>('/search/issues?q=repo:rocketseat-education/bootcamp-gostack-desafios');
      
      const issuesItems = data.items.map((issue) => (
        {
          number: issue.number,
          title: issue.title,
          created_at: issue.created_at,
          body: issue.body,
        }
      ));

      setIssues(issuesItems);
    }

    fetchIssues();
  }, []);

  return(
    <BlogContainer>
      <Profile />
      <Title>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </Title>
      <Input placeholder="Buscar contéudo" />

      <Cards>
        {
          issues.map(issue => (
            <Card
              key={issue.number}
              issue={issue}
            />
          ))
        }
      </Cards>
    </BlogContainer>
  );
}