import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme['background']};
  }

  body, input {
    color: ${props => props.theme['text']};
    font-family: 'Nunito', sans-serif;
    line-height: 160%;
  }

  h1, h2, h3 {
    color: ${props => props.theme['title']};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue']}; 
  }
`;