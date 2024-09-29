import { useTheme } from "@/contexts/ThemeContext";
import theme from "@/styles/theme";
import React, { FC, PropsWithChildren } from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface TypographyProps extends PropsWithChildren<TouchableOpacityProps> {
  backgroundColor?: string;
}

export const Button: FC<TypographyProps> = (props) => {
  const { theme } = useTheme();

  const combinedStyles = StyleSheet.flatten([
    styles.button,
    {
      backgroundColor: props.backgroundColor || theme.default.primary,
    },
    props.style,
  ]);

  return (
    <TouchableOpacity {...props} style={combinedStyles}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 32,
    borderRadius: 50,
    paddingHorizontal: theme.spacings.md,
    justifyContent: "center",
    alignItems: "center",
  },
});
