import { FappThemeCommons } from '../types/defaultTheme';

export const Colors = {
  green1: '#00665F',
  green2: '#06847B',
  green3: '#06BAB2',
  green4: '#70CCCC',

  red1: '#BE373D',
  red2: '#EF6167',
  red3: '#FFADB1',
  red4: '#FFDCDE',

  blue1: '#17222F',
  blue2: '#2D4054',
  blue3: '#6494C6',
  blue4: '#9ED6EE',

  yellow1: '#D9A92F',
  yellow2: '#FFDB6E',
  yellow3: '#FFEEBB',

  pele1: '#C1796B',
  pele2: '#EFBFA5',

  success: '#27AE60',
  alert: '#FFC61A',
  error: '#EB5757',

  grey1: '#4B4B4B',
  grey2: '#787878',
  grey3: '#999999',
  grey4: '#B6B6B6',
  grey5: '#D3D3D3',
  grey6: '#E9E9E9',
  grey7: '#F5F5F5',

  white: '#FFFFFF',

  blueTShirt1: '#2D4054',
  blueTShirt2: '#17222F',

  successBackground: '#E8F7E8',
  alertBackground: '#FFEEBB',
  errorBackground: '#FFDCDE',

  location: '#F15B4A',
};

export const ColorPallete = {
  green1: '#00665F',
  green2: '#06847B',
  green3: '#06BAB2',
  green4: '#C7EBEB',

  red1: '#BE373D',
  red2: '#EF6167',
  red3: '#FFADB1',
  red4: '#FFDCDE',

  blue1: '#17222F',
  blue2: '#2D4054',
  blue3: '#6494C6',
  blue4: '#9ED6EE',

  grey1: '#4B4B4B',
  grey2: '#787878',
  grey3: '#999999',
  grey4: '#B6B6B6',
  grey5: '#D3D3D3',
  grey6: '#E9E9E9',
  grey7: '#F5F5F5',
  grey8: '#F7F8F9',

  white: '#FFFFFF',

  yellow1: '#D9A92F',
  yellow2: '#FFDB6E',
  yellow3: '#FFEEBB',

  blueTShirt1: '#2D4054',
  blueTShirt2: '#17222F',

  success: '#45A943',
  alert: '#FFC61A',
  error: '#EB5757',

  successBackground: '#E8F7E8',
  alertBackground: '#FFEEBB',
  errorBackground: '#FFDCDE',

  location: '#F15B4A',
};

const SPACING_BASE = 8;

export const Theme: FappThemeCommons = {
  name: 'Fapp Default',

  typography: {
    fontFamily: {
      sansSerif: "'Montserrat', sans-serif",
    },
    heading: {
      h1: '40px',
      h2: '32px',
      h3: '26px',
      h4: '24px',
      h5: '20px',
      h6: '18px',
      h7: '16px',
      h8: '14px',
      h9: '12px',
      h10: '10px',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      xs: 1,
      sm: 1.1,
      md: 1.5,
      lg: 2,
      xl: 2.5,
      xxl: 3,
    },
    link: {
      decoration: 'none',
      hoverDecoration: 'none',
    },
  },

  breakpoints: {
    xs: '240px',
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
    xxl: '1320px',
    fluid: '100%',
  },

  spacing: {
    base: SPACING_BASE, // 8
    xs: '4px', // 4px
    sm: '8px', // 8px
    md: '12px', // 12px
    lg: '24px', // 24px
    xl: '32px', // 32px
    xxl: '64px', // 64px
    super: '80px', // 80px
  },

  border: {
    radius: {
      xs: '3px',
      sm: '6px',
      md: '8px',
      lg: '10px',
      leftRadius: '8px 0px 0px 8px',
      rightRadius: '0px 8px 8px 0px',
    },
    width: {
      sm: '1.5px',
    },
  },

  height: {
    sm: 24,
    md: 32,
    lg: 48,
  },

  dropShadow: {
    filter: 'drop-shadow(0px 0.5px 1.5px rgba(0, 0, 0, 0.2))',
    filterSmooth: 'drop-shadow(0px 0.5px 1.5px rgba(0, 0, 0, 0.1))',
    Z1: '0px 0px 2px rgba(0, 0, 0, 0.1)',
    Z2: '0px 0px 4px rgba(0, 0, 0, 0.1)',
    Z3: '0px 0px 6px rgba(0, 0, 0, 0.1)',
    Z4: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    Z5: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    Z6: '0px 2px 12px rgba(0, 0, 0, 0.1)',
    Z7: '0px 2px 16px rgba(0, 0, 0, 0.1)',
  },
};

export default Theme;
