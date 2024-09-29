import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { router, useLocalSearchParams } from "expo-router";
import theme from "@/styles/theme";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/types/contact.types";
import useTypedFormik from "@/hooks/useFormik";
import * as Yup from "yup";
import { Header } from "@/components/Header";
import { deleteContact, editContact } from "@/store/reducers/contacts.reducer";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useState } from "react";
import { Avatar } from "@/components/Avatar";
import { Typography } from "@/components/Typography";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Toast from "react-native-toast-message";
import { Divider } from "@/components/Divider";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { ActionHeader } from "@/components/ActionHeader";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email"),
  phoneNr: Yup.string().max(15, "Invalid phone number"),
});

export default function Contact() {
  const { theme } = useTheme();
  const { id } = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const [isEdit, setIsEdit] = useState(false);

  const bg = { backgroundColor: theme.default.primary };
  const contact = useAppSelector((state) => state.contacts.contacts.find((c) => c.id === id));

  const initialValues: ContactInfo = {
    name: contact?.name || "",
    email: contact?.email || "",
    phoneNr: contact?.phoneNr || "",
  };

  const formik = useTypedFormik<ContactInfo>({
    validateOnMount: true,
    validateOnChange: true,
    initialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      if (contact) {
        dispatch(editContact({ ...contact, ...values }));
        setIsEdit(false);
      } else {
        showErrorToast();
      }
    },
  });
  const nothingChanged =
    formik.values.name === contact?.name &&
    formik.values.email === contact?.email &&
    formik.values.phoneNr === contact?.phoneNr;

  function handleDelete() {
    if (contact?.id) {
      dispatch(deleteContact(contact?.id));
      router.back();
    } else {
      showErrorToast();
    }
  }

  function handleActionPress() {
    Toast.show({
      type: "info",
      text1: "Oops!",
      text2: "This feature is coming soon!",
      visibilityTime: 2000,
      autoHide: true,
      topOffset: insets.top + 10,
    });
  }

  function showErrorToast() {
    Toast.show({
      type: "error",
      text1: "Something went wrong!",
      text2: "Looks like we could not find the contact!",
      visibilityTime: 2000,
      autoHide: true,
      topOffset: insets.top + 10,
    });
  }

  function handleCancel() {
    setIsEdit(false);
    formik.resetForm();
  }
  return (
    <View style={[styles.container, { backgroundColor: theme.default.background }]}>
      {isEdit ? (
        <SafeAreaView>
          <ActionHeader
            onPrimaryBtnPress={handleCancel}
            secondaryBtnDisabled={!formik.isValid || nothingChanged}
            onSecondaryBtnPress={() => formik.handleSubmit()}
          />
        </SafeAreaView>
      ) : (
        <Header buttonText={"Edit"} onPress={() => setIsEdit(true)} />
      )}

      {isEdit ? (
        <ContactForm formik={formik} />
      ) : (
        <View style={styles.content}>
          <Avatar name={contact?.name || "Unknown"} />
          <Typography style={styles.name}>{contact?.name || "Unknown"}</Typography>

          <View style={styles.actions}>
            {actions.map((action) => (
              <TouchableOpacity
                key={action.label}
                style={[styles.action, bg]}
                onPress={handleActionPress}
              >
                {action.icon}
                <Typography style={styles.actionLabel}>{action.label}</Typography>
              </TouchableOpacity>
            ))}
          </View>

          <View style={[styles.info, bg]}>
            {/* Phone Number */}
            <Typography style={[styles.label, { color: theme.default.text }]}>
              Phone Number
            </Typography>
            <Typography style={styles.infoRow}>{contact?.phoneNr || "Unknown"}</Typography>

            <Divider spacing={theme.spacings.md} />

            {/* Email */}
            <Typography style={[styles.label, { color: theme.default.text }]}>Email</Typography>
            <Typography style={styles.infoRow}>{contact?.email || "Unknown"}</Typography>
          </View>

          <View style={[styles.deleteBtn, bg]}>
            <Typography onPress={handleDelete} style={styles.deleteBtnText}>
              Delete
            </Typography>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacings.lg,
  },
  header: {
    marginTop: theme.spacings.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    position: "relative",
    alignItems: "center",
  },
  name: {
    marginTop: theme.spacings["2xl"],
    fontSize: theme.fontSizes["2xl"],
    fontFamily: theme.fontFamily.medium,
  },
  actions: {
    width: "100%",
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacings.md,
  },
  action: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacings.xs,
    paddingVertical: theme.spacings.sm,
    borderRadius: 10,
  },
  actionLabel: {
    marginTop: theme.spacings.xs,
    fontSize: theme.fontSizes.xs,
    color: theme.colors.action,
  },
  info: {
    width: "100%",
    borderRadius: 10,
    marginTop: theme.spacings.lg,
    padding: theme.spacings.md,
  },
  label: {
    fontSize: theme.fontSizes.sm,
  },
  infoRow: {
    marginTop: theme.spacings.sm,
    color: theme.colors.action,
  },
  deleteBtn: {
    height: 48,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: theme.spacings.md,
    marginTop: theme.spacings.lg,
  },
  deleteBtnText: {
    color: theme.colors.danger,
  },
});

const actions = [
  {
    label: "Message",
    icon: <MaterialCommunityIcons name="message" size={20} color={theme.colors.action} />,
  },
  {
    label: "Call",
    icon: <FontAwesome5 name="phone-alt" size={20} color={theme.colors.action} />,
  },
  {
    label: "Video",
    icon: <FontAwesome5 name="video" size={20} color={theme.colors.action} />,
  },
  {
    label: "Email",
    icon: <MaterialCommunityIcons name="email" size={20} color={theme.colors.action} />,
  },
];
