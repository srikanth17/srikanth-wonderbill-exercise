import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    font-family: 'Hind';
    background: ${theme.palette.background.body};
    ${theme.typography.body};
  }
`;

export default GlobalStyle;
