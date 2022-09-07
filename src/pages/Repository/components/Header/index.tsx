import { useEffect, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import pt_BR from 'date-fns/locale/pt-BR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCalendarDay, faCircleDot, faStar } from '@fortawesome/free-solid-svg-icons';

import { api } from '../../../../lib/axios';
import { Loading } from '../../../../components/Loading';

import { HeaderContainer, Title, Info } from './styles';

interface Repository {
  name: string;
  created_at: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  open_issues: number;
}

export function Header() {
  const [repositoryInfo, setRepositoryInfo] = useState({} as Repository);
  const [isLoadingRepository, setIsLoadingRepository] = useState(true);

  const username = 'rocketseat-education';
  const repository = 'bootcamp-gostack-desafios';  
  // const repository = 'reactjs-github-blog-challenge';  

  async function fetchUser() {
    const { data } = await api.get(`repos/${username}/${repository}`);  

    setRepositoryInfo({
      name: data.name,
      created_at: data.created_at,
      html_url: data.html_url,
      description: data.description,
      stargazers_count: data.stargazers_count,
      open_issues: data.open_issues,
    });

    setIsLoadingRepository(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoadingRepository) {
    return <Loading />
  }

  return (
    <HeaderContainer>
      <div>
        <Title>
          <h1>{repositoryInfo.name.replace(/-/g, ' ')}</h1>
          <a href={repositoryInfo.html_url} target="_blank">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Title>

        <p>{repositoryInfo.description}</p>

        <Info>
          <div title={format(new Date(repositoryInfo.created_at), 'dd/MM/yyyy')}>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{formatDistanceToNow(new Date(repositoryInfo.created_at), {
              locale: pt_BR,
              addSuffix: true,
            })}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faStar} />
            {repositoryInfo.stargazers_count}
            {' '}
            <span>Stars</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faCircleDot} />
            {repositoryInfo.open_issues}
            {' '}
            <span>Issues</span>
          </div>
        </Info>
      </div>
    </HeaderContainer>
  );
}