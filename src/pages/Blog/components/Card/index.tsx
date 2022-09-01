import { formatDistanceToNow } from 'date-fns';
import pt_BR from 'date-fns/locale/pt-BR';

import { CardContainer } from './styles';

interface Issue {
  number: number;
  title: string;
  created_at: string;
  body: string;
}
  
interface CardProps {
  issue: Issue;
}

export function Card({ issue }: CardProps) {
  const dateFormatted = formatDistanceToNow(new Date(issue.created_at), {
    locale: pt_BR,
    addSuffix: true
  });

  return (
    <CardContainer to="#">
      <div>
        <h2>{issue.title}</h2>
        <span>{dateFormatted}</span>
      </div>

      <p>{issue.body}</p>
    </CardContainer>
  );
}