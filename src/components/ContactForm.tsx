import theme from "@/styles/theme";
import React, { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Typography } from "./Typography";
import { Divider } from "./Divider";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import Toast from "react-native-toast-message";
import { ContactInfo } from "@/types/contact.types";
import { FormikType } from "@/hooks/useFormik";
import { useTheme } from "@/contexts/ThemeContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ContactFormProps = {
  formik: FormikType<ContactInfo>;
};

export const ContactForm: FC<ContactFormProps> = ({ formik }) => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  function showToast() {
    Toast.show({
      type: "info",
      text1: "Oops!",
      text2: "This feature is coming soon!",
      visibilityTime: 2000,
      autoHide: true,
      topOffset: insets.top + 10,
    });
  }

  return (
    <>
      <View style={styles.avatarContainer}>
        <Avatar name={formik.values.name || "Some Name"} />

        <Button style={{ marginTop: theme.spacings.lg }} onPress={showToast}>
          <Typography style={{ color: theme.colors.action }}>Add photo</Typography>
        </Button>
      </View>

      <View style={[styles.form, { backgroundColor: theme.default.primary }]}>
        {/* Name */}
        <Typography style={styles.label}>Name</Typography>
        <TextInput
          value={formik.values.name}
          onChangeText={(value) => void formik.setFieldValue("name", value)}
          numberOfLines={1}
          keyboardType="default"
          autoCapitalize="none"
          placeholder="Some Name"
          placeholderTextColor={theme.colors.zinc}
          style={[styles.input, { color: theme.default.text }]}
        />

        <Divider spacing={theme.spacings.md} />

        {/* Phone Number */}
        <Typography style={styles.label}>Phone Number</Typography>
        <TextInput
          value={formik.values.phoneNr}
          onChangeText={(value) => void formik.setFieldValue("phoneNr", value)}
          numberOfLines={1}
          keyboardType="phone-pad"
          autoCapitalize="none"
          placeholder="+45 12 52 12 12"
          placeholderTextColor={theme.colors.zinc}
          style={[styles.input, { color: theme.default.text }]}
        />

        <Divider spacing={theme.spacings.md} />

        {/* Email */}
        <Typography style={styles.label}>Email</Typography>
        <TextInput
          value={formik.values.email}
          onChangeText={(value) => void formik.setFieldValue("email", value)}
          numberOfLines={1}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="myemail@gmail.com"
          placeholderTextColor={theme.colors.zinc}
          style={[styles.input, { color: theme.default.text }]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacings.lg,
  },
  form: {
    marginTop: 32,
    borderRadius: 10,
    padding: theme.spacings.md,
  },
  label: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.zinc,
  },
  input: {
    width: "100%",
    height: 24,
    marginTop: theme.spacings.xs,
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fontFamily.regular,
  },
});
