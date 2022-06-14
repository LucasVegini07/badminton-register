import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.grey1};
  font: 400 16px 'Montserrat', sans-serif;
}

button {
  cursor: pointer;
}
`;
