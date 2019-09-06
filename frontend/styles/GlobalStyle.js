import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1rem;
    background-color: ${darken(.1, '#fff')};
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  h3 {
    font-weight: 400;
  }
  p, ul li, button {
    font-size: 1rem;
    font-weight: 100;
  }
`;

export default GlobalStyle;
