export interface FappThemeCommons {
  name: string;

  height: {
    sm: number;
    md: number;
    lg: number;
  };

  border: {
    radius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      leftRadius: string;
      rightRadius: string;
    };
    width: {
      sm: string;
    };
  };

  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    fluid: string;
  };

  typography: {
    fontFamily: {
      sansSerif: string;
    };
    weight: {
      light: number;
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
    lineHeight: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    heading: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      h7: string;
      h8: string;
      h9: string;
      h10: string;
    };
    link: {
      decoration: string;
      hoverDecoration: string;
    };
  };

  spacing: {
    base: number;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    super: string;
  };

  dropShadow: {
    filter: string;
    filterSmooth: string;
    Z1: string;
    Z2: string;
    Z3: string;
    Z4: string;
    Z5: string;
    Z6: string;
    Z7: string;
  };
}
