import styled from 'styled-components';

export const BlogContainer = styled.main`
  max-width: 864px;
  margin-inline: auto;
  padding-inline: 1rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -1rem;
  margin-bottom: .75rem;

  h3 {
    font-size: 1.125rem;
    color: ${props => props.theme['subtitle']};
  }

  span {
    font-size: .875rem;
    color: ${props => props.theme['span']};
  }

  @media (max-width: 900px) {
    margin-top: -3rem;
  }
`;