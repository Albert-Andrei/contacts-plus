import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Typography } from "./Typography";
import theme from "@/styles/theme";
import { Contact as ContactType } from "@/types/contact.types";
import { Avatar } from "./Avatar";
import { useTheme } from "@/contexts/ThemeContext";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface ContactProps {
  contact: ContactType;
  onPress?: () => void;
}

export const ContactItem: FC<ContactProps> = ({ contact, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Avatar name={contact.name} size="small" />

        <View>
          <Typography style={[styles.title, { color: theme.default.text }]}>
            {contact.name}
          </Typography>
          {contact.phoneNr && <Typography style={styles.subtitle}>{contact.phoneNr}</Typography>}
        </View>
      </View>

      {/* <TouchableOpacity style={styles.phone}>
        <FontAwesome5 name="phone-alt" size={16} color={theme.colors.action} />
      </TouchableOpacity> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: theme.spacings.md,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacings.md,
  },
  title: {
    fontSize: theme.fontSizes.sm,
    fontFamily: theme.fontFamily.medium,
  },
  subtitle: {
    color: theme.colors.zinc,
    fontSize: theme.fontSizes.xs,
  },
  phone: {
    backgroundColor: `${theme.colors.action}20`,
    padding: theme.spacings.xs,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
  },
});
