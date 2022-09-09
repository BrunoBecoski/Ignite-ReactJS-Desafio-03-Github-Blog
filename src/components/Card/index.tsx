import { CardContainer, Avatar } from './styles';

type User = {
  login: string;
  avatarUrl: string;
}

interface CardProps {
  user?: User;
}

export function Card({ user }: CardProps) {
  if (user) {
    return (
      <CardContainer to={user.login}>
        <Avatar src={user.avatarUrl} />
        <h3>{user.login}</h3>
      </CardContainer>
    );
  }

  return (<></>);
}