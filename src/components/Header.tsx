import theme from "@/styles/theme";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "./Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { Typography } from "./Typography";
import { useTheme } from "@/contexts/ThemeContext";

type HeaderProps = {
  disabled?: boolean;
  buttonText?: string;
  onPress?: () => void;
};

export const Header: FC<HeaderProps> = ({ buttonText, disabled, onPress }) => {
  const { theme } = useTheme();

  function goBack() {
    router.back();
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Button style={{ width: 32, paddingHorizontal: 0 }} onPress={goBack}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color={theme.default.text} />
        </Button>

        <Button disabled={disabled} style={{ opacity: disabled ? 0.5 : 1 }} onPress={onPress}>
          <Typography style={styles.saveBtnText}>{buttonText}</Typography>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: theme.spacings.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  saveBtnText: {
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fontFamily.medium,
  },
});
