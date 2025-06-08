import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { login } from "../../redux/auth/operations.ts";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { Input, LoginButton } from "../../common/styles.ts";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store.ts";
import { ReactNode } from "react";
import { formSubmit, FormValues } from "../../utilities/formSubmit.ts";

// interface InitialValues {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

interface FormInputFields {
  name: string;
  placeholder: string;
}

interface FormTemplateProps {
  type: "login" | "register";
  initialValues: FormValues;
  fields: FormInputFields[];
  buttonText: string;
  onSubmit: (values: FormValues, actions: FormikHelpers<FormValues>) => void;
  footer?: ReactNode;
}

const FormTemplate = ({
  type,
  initialValues,
  fields,
  buttonText,
  onSubmit,
  footer,
}: FormTemplateProps) => {
  // const onFormSubmitHandle = (
  //   values: initialState,
  //   actions: FormikHelpers<initialState>
  // ) => {
  //   const trimmedValues = {
  //     email: values.email.trim(),
  //     password: values.password,
  //   };

  //   dispatch(login({ ...trimmedValues }));
  //   if (errorMessage) {
  //     console.log("Incorrect login or password");
  //     actions.resetForm();
  //   }
  //   actions.resetForm();
  // };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      className="flex flex-col gap-8"
    >
      <Form className="w-fit">
        <div className="flex flex-col gap-4 w-fit">
          {fields.map((field) => (
            <>
              <Field as={Input} {...field} />
              <ErrorMessage
                name={field.name}
                component="span"
                className="text-left text-red-600"
              />
            </>
          ))}
          <LoginButton className="uppercase" type="submit">
            {buttonText}
          </LoginButton>
        </div>
        {footer}
      </Form>
    </Formik>
  );
};

export default FormTemplate;
