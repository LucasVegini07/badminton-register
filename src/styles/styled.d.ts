/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

import theme from './theme';

export type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme extends Theme { }
}
