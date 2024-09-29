import global from "../theme";
import { Theme } from "@/types/theme.types";

const darkTheme: Theme = {
  ...global,
  default: {
    background: "#181818",
    primary: "#000000",
    text: "#ffffff",
  },
};

export default darkTheme;
