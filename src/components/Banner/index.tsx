import { NavLink, useNavigate } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import pt_BR from 'date-fns/locale/pt-BR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faCalendarDay, faChevronLeft, faCircleDot, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { Avatar, Header, Info, InfoBannerContainer, NavBar } from './styles';

type Home = {
  title: string;
}

type User = {
  avatarUrl: string;
  bio: string;
  company: string;
  following: number;
  htmlUrl: string;
  name: string;
  login: string;
}

type Repository = {
  name: string;
  createdAt: string;
  htmlUrl: string;
  description: string;
  stargazersCount: number;
  openIssues: number;
}

interface BannerProps {
  home?: Home;
  user?: User;
  repository?: Repository;
}

export function Banner({ home, user, repository }: BannerProps) {
  if(home) {
    return (
      <InfoBannerContainer>
        <h2>{home.title}</h2>
      </InfoBannerContainer>
    );
  }

  if(user) {
    return (
      <InfoBannerContainer>
        <Avatar src={user.avatarUrl} />
        <div>
          <Header>
            <h2>{user.name}</h2>
            <a target="_blanck" href={user.htmlUrl}>
              <span>Github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </Header>

          <p>{user.bio}</p>

          <Info>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              {user.login}
            </div>

            <div>
              <FontAwesomeIcon icon={faBuilding} />
              {user.company}
            </div>

            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              {user.following}
              {' '}
              seguidores
            </div>
          </Info>
        </div>
      </InfoBannerContainer>
    );
  }

  if(repository) {
    const navigate = useNavigate();

    const dateFormatted = formatDistanceToNow(new Date(repository.createdAt), {
      locale: pt_BR,
      addSuffix: true
    });
    const dateTitle = format(new Date(repository.createdAt), 'dd/MM/yyyy');    

    return (
      <InfoBannerContainer>
        <div>
          <NavBar>
            <button onClick={() => navigate(-1)} >
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>Voltar</span>
            </button>

            <a target="_blanck" href={repository.htmlUrl}>
              <span>Github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </NavBar>
          <Header>
            <h2>{repository.name}</h2>
          </Header>

          <p>{repository.description}</p>

          <Info>
            <div title={dateTitle}>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>{dateFormatted}</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faStar} />
              {repository.stargazersCount}
              {' '}
              Stars
            </div>

            <div>
              <FontAwesomeIcon icon={faCircleDot} />
              {repository.openIssues}
              {' '}
              Open Issues
            </div>
          </Info>
        </div>
      </InfoBannerContainer>
    );
  }

  return (<></>);
}