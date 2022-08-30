import { Profile } from './components/Profile';
import { Input } from '../../components/Input';

import { BlogContainer, Title } from './styles';

export function Blog() {
  return(
    <BlogContainer>
      <Profile />
      <Title>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </Title>
      <Input placeholder="Buscar contéudo" />
    </BlogContainer>
  );
}