import { NavLink, useNavigate } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import pt_BR from 'date-fns/locale/pt-BR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faCalendarDay, faChevronLeft, faCircleDot, faComment, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { Avatar, Header, Info, InfoBannerContainer, Main, NavBar } from './styles';

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

type Issue = {
  htmlUrl: string;
  title: string;
  userLogin: string;
  comments: number;
  createdAt: string;
}

interface BannerProps {
  home?: Home;
  user?: User;
  repository?: Repository;
  issue?: Issue;
}

export function Banner({ home, user, repository, issue }: BannerProps) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1)
  }

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
        <NavBar>
          <button onClick={handleGoBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </button>

          <button>
            <a target="_blanck" href={user.htmlUrl}>
              <span>Github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </button>
        </NavBar>

        <Main>
          <Avatar src={user.avatarUrl} />
          <div>
            <Header>
              <h2>{user.name}</h2>
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
        </Main>
      </InfoBannerContainer>
    );
  }

  if(repository) {
    const dateFormatted = formatDistanceToNow(new Date(repository.createdAt), {
      locale: pt_BR,
      addSuffix: true
    });
    const dateTitle = format(new Date(repository.createdAt), 'dd/MM/yyyy');    

    return (
      <InfoBannerContainer>
        <NavBar>
          <button onClick={handleGoBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </button>

          <button>
            <a target="_blanck" href={repository.htmlUrl}>
              <span>Github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </button>
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
      </InfoBannerContainer>
    );
  }

  if(issue) {
    const dateFormatted = formatDistanceToNow(new Date(issue.createdAt), {
      locale: pt_BR,
      addSuffix: true
    });
    const dateTitle = format(new Date(issue.createdAt), 'dd/MM/yyyy');    

    return (
      <InfoBannerContainer>
        <NavBar>
          <button onClick={handleGoBack} >
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </button>
          
          <button>
            <a target="_blanck" href={issue.htmlUrl}>
              <span>Github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </button>
        </NavBar>

        <Header>
          <h2>{issue.title}</h2>
        </Header>

        <Info>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            {issue.userLogin}
          </div>

          <div title={dateTitle}>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{dateFormatted}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            {issue.comments}
            {' '}
            comentários
          </div>
        </Info>
      </InfoBannerContainer>
    );
  }

  return (<></>);
}