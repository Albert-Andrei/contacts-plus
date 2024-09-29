import theme from "@/styles/theme";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Typography } from "./Typography";
import { HelloWave } from "./HelloWave";
import { Divider } from "./Divider";
import { useTheme } from "@/contexts/ThemeContext";

interface EmptyListProps {
  title?: string;
  description?: string;
  onPress?: () => void;
}

export const EmptyList: FC<EmptyListProps> = ({ title, description, onPress }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.listEmptyContainer, { backgroundColor: theme.default.primary }]}>
      <Typography style={[styles.listEmptyHeader, { color: theme.default.text }]}>
        {title ? title : "Hi there"} {!title && <HelloWave />}
      </Typography>
      <Typography style={styles.listEmptyDescription}>
        {description
          ? description
          : "It looks like you haven’t added any contacts yet. Tap the button below to create your first one and get started!"}
      </Typography>
      {onPress && (
        <>
          <Divider />

          <TouchableOpacity style={styles.listEmptyButton} onPress={onPress}>
            <Typography color={theme.colors.action}>Create first contact</Typography>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listEmptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    paddingHorizontal: theme.spacings.lg,
    paddingVertical: theme.spacings.lg,
    backgroundColor: theme.colors.white,
    borderRadius: 12,
  },
  listEmptyHeader: {
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fontFamily.medium,
  },
  listEmptyDescription: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.zinc,
    marginTop: theme.spacings.sm,
    textAlign: "center",
  },
  listEmptyButton: {
    width: "100%",
    alignItems: "center",
  },
});
