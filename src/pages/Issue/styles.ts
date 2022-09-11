import styled from 'styled-components';

export const PostContainer = styled.main`
  max-width: calc(864px + 2rem);
  margin-inline: auto;
  padding-inline: 1rem;
`;

export const Content = styled.div`
  margin-top: -5rem;
  padding: 2rem;

  p {
    margin-block: .5rem;
  }

  strong {
    color: ${props => props.theme['subtitle']};
  }

  h2 {
    margin-block: 2.5rem 1.5rem;
  }

  h3 {
    margin-block: 1.5rem 1rem;
  }

  a {
    color: ${props => props.theme['blue']};
    text-decoration: none;
    
    :hover {
      text-decoration: underline;
    }
  }

  ul {
    margin-block: 1rem;
    list-style-position: inside;

    li + li {
      margin-top: .5rem;
    }
  }

  img {
    width: 100%;
    margin-block: 1rem;
  }

  @media (max-width: 900px) {
    margin-top: -3rem;
    padding: .5rem;
  }
`;