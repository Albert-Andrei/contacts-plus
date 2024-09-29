import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { router } from "expo-router";
import theme from "@/styles/theme";
import Toast from "react-native-toast-message";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/types/contact.types";
import useTypedFormik from "@/hooks/useFormik";
import * as Yup from "yup";
import { Header } from "@/components/Header";
import { addContact } from "@/store/reducers/contacts.reducer";
import { useAppDispatch } from "@/store/store";
import { ActionHeader } from "@/components/ActionHeader";

const initialValues: ContactInfo = {
  name: "",
  email: "",
  phoneNr: "",
};

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email"),
  phoneNr: Yup.string().max(15, "Invalid phone number"),
});

export default function CreateContact() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isIOS = Platform.OS === "ios";

  const formik = useTypedFormik<ContactInfo>({
    validateOnMount: true,
    validateOnChange: true,
    initialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      dispatch(addContact(values));
      goBack();
    },
  });

  function goBack() {
    router.back();
  }

  return (
    <>
      {isIOS && (
        <>
          <StatusBar barStyle={"light-content"} backgroundColor={"white"} animated />
          <Toast />
        </>
      )}

      <View style={[styles.container, { backgroundColor: theme.default.background }]}>
        {isIOS ? (
          <View
            style={{
              marginTop: theme.spacings.lg,
            }}
          >
            <ActionHeader
              onPrimaryBtnPress={goBack}
              secondaryBtnDisabled={!formik.isValid}
              onSecondaryBtnPress={() => formik.handleSubmit()}
            />
          </View>
        ) : (
          <Header
            buttonText="Save"
            onPress={() => formik.handleSubmit()}
            disabled={!formik.isValid}
          />
        )}

        <ContactForm formik={formik} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacings.lg,
  },
});
