import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../lib/axios';
import { Loading } from '../../components/Loading';
import { Info } from './components/Info';
import { Content } from './components/Content';

import { PostContainer } from './styles';

interface InfoContent {
  html_url: string;
  title: string;
  user_login: string;
  created_at: string;
  comments: number;
}

export function Post() {
  const { issueId } = useParams();
  const user = 'rocketseat-education';
  const repo = 'reactjs-github-blog-challenge';

  const [infoContent, setInfoContent] = useState({} as InfoContent); 
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchIssue() {
      const { data } = await api.get(`/repos/${user}/${repo}/issues/${issueId}`);      

      setInfoContent({
        html_url: data.html_url,
        title: data.title,
        user_login: data.user.login,
        created_at: data.created_at,
        comments: data.comments
      })
      setBody(data.body);
      setIsLoading(false);
    }

    fetchIssue();
  }, []);

  return (
    <PostContainer>
      {
        isLoading 
        ?
          <Loading />
        :
          <>
            <Info content={infoContent} />
            <Content body={body} />
          </>
      }
    </PostContainer>
  );
}