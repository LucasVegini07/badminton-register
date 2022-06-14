import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --green1: #098C86;
  --green2: #06BAB2;
  --green3: #9FFCF8;
  --green4: #C7EBEB;

  --red1: #BE373D;
  --red2: #EF6167;
  --red3: #FFADB1;
  --red4: #FFDCDE;

  --blue1: #17222F;
  --blue2: #2D4054;
  --blue3: #6494C6;
  --blue4: #9ED6EE;

  --grey1: #4B4B4B;
  --grey2: #787878;
  --grey3: #999999;
  --grey4: #B6B6B6;
  --grey5: #D3D3D3;
  --grey6: #E9E9E9;
  --grey7: #F5F5F5;
  --grey8: #F7F8F9;
  --grey-text: #323232;

  --white-background: #f7f8f9;
  --white: #FFFFFF;

  --skin1: #C1796B;
  --skin2: #EFBFA5;

  --yellow1: #D9A92F
  --yellow2: #FFDB6E
  --yellow3: #FFEEBB
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
  height: 100%;
  @media (max-width: 1080px){
    font-size: 93.75%; //15px
  }
  @media (max-width: 720px){
    font-size: 87.5%; //14px
  }
}
body {
    background: var(--white-background);
    color: ${props => props.theme.colors.text};
    font: 400 16px Montserrat, sans-serif;
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
`;
