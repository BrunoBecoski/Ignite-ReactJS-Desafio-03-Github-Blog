import { Profile } from './components/Profile';
import { Input } from '../../components/Input';
import { Card } from './components/Card';

import { BlogContainer, Title, Cards } from './styles';

export function Blog() {
  return(
    <BlogContainer>
      <Profile />
      <Title>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </Title>
      <Input placeholder="Buscar contéudo" />

      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
    </BlogContainer>
  );
}