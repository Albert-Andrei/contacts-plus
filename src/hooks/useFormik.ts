import { FormikConfig, FormikValues, useFormik } from "formik";

/**
 * Hook that adds type checking to some Formik functions by wrapping them
 *
 * TODO(s):
 *  ~ test multiple scenarios
 *  ~ consider of making a pull request to the library
 */
const useTypedFormik = <Values extends FormikValues>(config: FormikConfig<Values>) => {
  const formik = useFormik(config);

  const setFieldValue = async <Field extends keyof Values, Value extends Values[Field]>(
    field: Field,
    value: Value,
    shouldValidate?: boolean,
  ) => {
    await formik.setFieldValue(String(field), value, shouldValidate);
    return Promise.resolve();
  };
  return { ...formik, setFieldValue };
};

export default useTypedFormik;

export type FormikType<T extends FormikValues> = ReturnType<typeof useTypedFormik<T>>;
