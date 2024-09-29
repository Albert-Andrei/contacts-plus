import global from "../theme";
import { Theme } from "@/types/theme.types";

const lightTheme: Theme = {
  ...global,
  default: {
    background: "#FAFAFA",
    primary: "#FFFFFF",
    text: "#000000",
  },
};

export default lightTheme;
