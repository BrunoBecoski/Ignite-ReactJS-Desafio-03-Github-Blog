import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme['text']};
    background: ${props => props.theme['background']};
  }

  body, input {
    font-family: 'Nunito', sans-serif;
    line-height: 160%;
  }
`;