export interface Theme {
  default: {
    background: string;
    primary: string;
    text: string;
  };
  colors: {
    white: string;
    black: string;
    action: string;
    danger: string;
    zinc: string;
    divider: string;
  };
  fontFamily: {
    regular: string;
    medium: string;
  };
  fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
  };
  spacings: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
  };
}
