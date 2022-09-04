import { useEffect, useState } from 'react';

import { api } from '../../lib/axios';
import { Loading } from '../../components/Loading';
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
  const [issuesSearch, setIssuesSearch] = useState<Issue []>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    }

    fetchIssues();
  }, []);

  useEffect(() => {
    const regex = new RegExp("" + search.toLocaleLowerCase() + "");

    const searchIssues = issues.filter(issue => {
      if(regex.test(issue.title.toLowerCase())) {
        return issue;
      } else {
        return;
      }
    });

    setIssuesSearch(searchIssues as Issue[]);
  }, [search]);

  return(
    <BlogContainer>
      {
        isLoading
        ? 
          <Loading />
        :
          <>
            <Profile />
            <Title>
              <h3>Publicações</h3>
              <span>{issues.length} {issues.length <= 1 ? 'publicação' : 'publicações'} </span>
            </Title>
            <Input
              placeholder="Buscar contéudo"
              onChange={props => setSearch(props.target.value)}  
              />

            <Cards>
              { issuesSearch.length === 0
              ?
              issues.map(issue => (
                <Card
                  key={issue.number}
                  issue={issue}
                />
              ))
              :
              issuesSearch.map(issue => (
                <Card
                    key={issue.number}
                    issue={issue}
                    />
                    ))
                  }
            </Cards>
          </>
      }
    </BlogContainer>
  );
}