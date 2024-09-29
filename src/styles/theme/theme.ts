import { Theme } from "@/types/theme.types";

const theme: Theme = {
  default: {
    background: "",
    primary: "",
    text: "",
  },
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    action: "#0D84FE",
    danger: "#FE0D0D",
    zinc: "#9FA5B1",
    divider: "#F8F8F8",
  },
  fontFamily: {
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
  },
  spacings: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 18,
    "2xl": 24,
  },
};

export default theme;
