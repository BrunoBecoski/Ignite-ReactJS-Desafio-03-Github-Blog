import { format, formatDistanceToNow } from 'date-fns';
import pt_BR from 'date-fns/locale/pt-BR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCircleDot } from '@fortawesome/free-solid-svg-icons';

import { CardContainer, Avatar, Header, Content } from './styles';

type User = {
  login: string;
  avatarUrl: string;
}

type Repository = {
  name: string;
  description: string;
  createdAt: string;
  openIssues: number,
}

type Issue = {
  title: string;
  createdAt: string;
  body: string;
  number: number;
}

interface CardProps {
  user?: User;
  repository?: Repository;
  issue?: Issue;
}

export function Card({ user, repository, issue }: CardProps) {
  if (user) {
    return (
      <CardContainer to={user.login}>
        <Header className="home">
          <Avatar src={user.avatarUrl} />
          <h3>{user.login}</h3>
        </Header>
      </CardContainer>
    );
  }

  if (repository) {
    const dateFormatted = formatDistanceToNow(new Date(repository.createdAt), {
      locale: pt_BR,
      addSuffix: true
    });
    const dateTitle = format(new Date(repository.createdAt), 'dd/MM/yyyy');

    return (
      <CardContainer to={repository.name}>
        <Header>
          <h3>{repository.name}</h3>
          <div title={dateTitle}>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{dateFormatted}</span>
          </div>
        </Header>
        <Content>
          <p>{repository.description}</p>
          <span>
            <FontAwesomeIcon icon={faCircleDot} />
            {repository.openIssues}
            {' '}
            Open Issues
          </span>
        </Content>
      </CardContainer>
    );
  }

  if (issue) {
    const dateFormatted = formatDistanceToNow(new Date(issue.createdAt), {
      locale: pt_BR,
      addSuffix: true
    });
    const dateTitle = format(new Date(issue.createdAt), 'dd/MM/yyyy');

    return (
      <CardContainer to={issue.number.toString()}>
        <Header>
          <h3>{issue.title}</h3>
          <div title={dateTitle}>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{dateFormatted}</span>
          </div>
        </Header>
        <Content>
          <p>{issue.body}</p>
        </Content>
      </CardContainer>
    );
  }

  return (<></>);
}