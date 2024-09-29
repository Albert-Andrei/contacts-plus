import { useTheme } from "@/contexts/ThemeContext";
import { View, StyleSheet } from "react-native";
import { Typography } from "./Typography";
import theme from "@/styles/theme";

export const NoInternet = () => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.default.background,
        },
      ]}
    >
      <Typography>No internet connection</Typography>
      <Typography style={styles.subtitle}>
        Looks like you're not connected to the internet, please check your settings!
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 50,
    backgroundColor: "red",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
    borderWidth: 1,
    borderColor: theme.colors.zinc,
  },
  subtitle: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 12,
    color: theme.colors.zinc,
  },
});
