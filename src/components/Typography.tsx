import { useTheme } from "@/contexts/ThemeContext";
import React, { FC, PropsWithChildren } from "react";
import { Text, TextProps, StyleSheet } from "react-native";

interface TypographyProps extends PropsWithChildren<TextProps> {
  color?: string;
}

export const Typography: FC<TypographyProps> = (props) => {
  const { theme } = useTheme();

  const combinedStyles = StyleSheet.flatten([
    {
      color: props.color || theme.default.text,
      fontFamily: theme.fontFamily.regular,
    },
    props.style,
  ]);

  return (
    <Text {...props} style={combinedStyles}>
      {props.children}
    </Text>
  );
};
