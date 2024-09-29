import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Typography } from "./Typography";
import { getNameInitials } from "@/utils/getUserInitials";
import theme from "@/styles/theme";

interface AvatarProps {
  name: string;
  size?: "small" | "large";
}

export const Avatar: FC<AvatarProps> = ({ name, size = "large" }) => {
  const isLarge = size === "large";

  return (
    <View style={[styles.avatar, isLarge && { width: 80, height: 80 }]}>
      <Typography style={[styles.avatarText, isLarge && { fontSize: theme.fontSizes["2xl"] }]}>
        {getNameInitials(name)}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: theme.colors.zinc,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.sm,
    fontFamily: theme.fontFamily.medium,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
});
