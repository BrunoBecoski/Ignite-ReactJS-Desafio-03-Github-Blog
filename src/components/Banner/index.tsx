import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Header, Info, InfoBannerContainer } from './styles';

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


interface BannerProps {
  home?: Home;
  user?: User;
}

export function Banner({ home, user }: BannerProps) {
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

  return (<></>);
}