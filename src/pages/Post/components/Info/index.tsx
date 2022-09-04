import { NavLink } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import pt_BR from 'date-fns/locale/pt-BR';
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { InfoContainer, NavBar, InfoBar } from './styles';

interface InfoProps {
  content: {
    html_url: string;
    title: string;
    user_login: string;
    created_at: string;
    comments: number;
  }
}

export function Info({ content }: InfoProps) {
  const dateFormatted = formatDistanceToNow(new Date(content.created_at), {
    locale: pt_BR,
    addSuffix: true,
  });

  return (
    <InfoContainer>
      <NavBar>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </NavLink>

        <a href={content.html_url} target="_blank">
          Ver no Github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </NavBar>

      <h2>{content.title}</h2>

      <InfoBar>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          {content.user_login}
        </div>

        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{dateFormatted}</span>
        </div>

        <div>
          <FontAwesomeIcon icon={faComment} />
          {content.comments} comentários
        </div>
      </InfoBar>
    </InfoContainer>
  );
}