import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  
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