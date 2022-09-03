import { NavLink } from 'react-router-dom';
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { InfoContainer, NavBar, InfoBar } from './styles';

export function Info() {
  return (
    <InfoContainer>
      <NavBar>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </NavLink>

        <a href="https://github.com/rocketseat-education/reactjs-github-blog-challenge/issues/1" target="_blank">
          Ver no Github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </NavBar>

      <h2>JavaScript data types and data structures</h2>

      <InfoBar>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          brunobecoski
        </div>

        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </div>

        <div>
          <FontAwesomeIcon icon={faComment} />
          5 comentários
        </div>
      </InfoBar>
    </InfoContainer>
  );
}