import { createGlobalStyle } from 'styled-components';
import { darken, lighten } from 'polished';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1rem;
    background-color: ${darken(.1, '#fff')};
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    padding: 0 !important;
    line-height: 1.5;
  }
  h3 {
    font-weight: 400;
  }
  p, ul li {
    color: ${lighten(.1, '#000')};
    font-size: 1rem;
    font-weight: 100;
  }
`;

export default GlobalStyle;
