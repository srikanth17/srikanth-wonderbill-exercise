import styled from 'styled-components';

import theme from '../theme';

const Button = styled.button`
  background: ${theme.palette.green};
  color: white;
  border-radius: ${theme.spacing(10)};
  width: 250px;
  padding: ${theme.spacing(3)} 0;
  border: none;
  display: block;
  margin: ${theme.spacing(10)} auto;
`;

export default Button;
