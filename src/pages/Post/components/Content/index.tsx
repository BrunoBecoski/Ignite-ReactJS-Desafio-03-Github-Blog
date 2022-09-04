import ReactMarkdown from 'react-markdown';

import { ContentContainer } from './styles';

interface ContentProps {
  body: string;
}

export function Content({ body }: ContentProps) {
  return (
    <ContentContainer>
      <ReactMarkdown
        linkTarget={'_blank'}
      >
        {body}
      </ReactMarkdown>
    </ContentContainer>
  );
}