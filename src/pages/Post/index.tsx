import { Info } from './components/Info';
import { Content } from './components/Content';

import { PostContainer } from './styles';

export function Post() {
  return (
    <PostContainer>
      <Info />
      <Content />
    </PostContainer>
  );
}