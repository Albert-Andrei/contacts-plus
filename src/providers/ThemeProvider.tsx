import { Appearance } from "react-native";
import { PropsWithChildren, useState, FC, useEffect } from "react";
import { darkTheme, lightTheme } from "@/styles/theme";
import { ThemeContext } from "../contexts/ThemeContext";

const colorScheme = Appearance.getColorScheme();

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const defaultTheme = colorScheme === "light" ? lightTheme : darkTheme;

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) =>
      setTheme(colorScheme === "light" ? lightTheme : darkTheme),
    );
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
