import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import { Avatar, ProfileContainer, Title, Info } from './styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src="https://www.github.com/brunobecoski.png"/>
      <div>
        <Title>
          <h1>Bruno Becoski</h1>
          <NavLink to="#">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </Title>

        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <Info>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            brunobecoski
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </div>
        </Info>
      </div>
    </ProfileContainer>
  );
}