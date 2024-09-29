import { StyleSheet, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";
import { Typography } from "./Typography";
import theme from "@/styles/theme";
import { FC } from "react";

export const HelloWave: FC = () => {
  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
    4, // Run the animation 4 times
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Typography style={styles.text}>👋</Typography>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.lg,
  },
});
