import theme from "@/styles/theme";
import { Theme } from "@/types/theme.types";
import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface ThemeContextProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: theme,
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
