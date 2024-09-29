import theme from "@/styles/theme";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

type DividerProps = {
  spacing?: number;
};

export const Divider: FC<DividerProps> = ({ spacing }) => {
  return <View style={[styles.divider, { marginVertical: spacing || theme.spacings.lg }]} />;
};

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: theme.colors.divider,
  },
});
