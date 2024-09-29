import theme from "@/styles/theme";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Typography } from "./Typography";

type HeaderProps = {
  onPrimaryBtnPress: () => void;
  secondaryBtnDisabled?: boolean;
  onSecondaryBtnPress: () => void;
};

export const ActionHeader: FC<HeaderProps> = ({
  onPrimaryBtnPress,
  secondaryBtnDisabled,
  onSecondaryBtnPress,
}) => {
  return (
    <View style={styles.header}>
      <Typography style={styles.button} onPress={onPrimaryBtnPress}>
        Cancel
      </Typography>

      <Typography
        disabled={secondaryBtnDisabled}
        style={[styles.button, { opacity: secondaryBtnDisabled ? 0.5 : 1 }]}
        onPress={onSecondaryBtnPress}
      >
        Save
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    color: theme.colors.action,
    fontSize: theme.fontSizes.md,
    marginTop: theme.spacings.lg,
  },
});
