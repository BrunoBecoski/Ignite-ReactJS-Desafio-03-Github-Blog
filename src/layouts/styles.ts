import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  
  z-index: -1;

  > img {
    width: 100%;
    height: 296px;
  }

  a {
    position: absolute;
    top: 64px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Main = styled.main`
  max-width: 900px;
  margin-inline: auto;
  padding-inline: 1rem;
`;