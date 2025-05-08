import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { LoginButton } from "../../layouts/Header/Header.styles";
import { validationRegisterSchema } from "../../validation/validation";
import { register } from "../../redux/auth/operations.ts";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { Input } from "../../common/styles.ts";

interface authUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: authUser = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = () => {
  const dispatch = useAppDispatch();

  const onFormSubmitHandle = (
    values: authUser,
    actions: FormikHelpers<authUser>
  ) => {
    const trimmedValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password,
    };

    dispatch(register({ ...trimmedValues }));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={onFormSubmitHandle}
      validationSchema={validationRegisterSchema}
      className="flex flex-col gap-8"
    >
      <Form className="w-fit">
        <div className="flex flex-col gap-4">
          <Field name="name" as={Input} placeholder="Name" />
          <ErrorMessage
            name="name"
            component="span"
            className="text-left text-red-600"
          />
          <Field name="email" as={Input} placeholder="Email" />
          <ErrorMessage
            name="email"
            component="span"
            className="text-left text-red-600"
          />
          <Field
            name="password"
            as={Input}
            placeholder="Password"
            type="password"
          />
          <ErrorMessage
            name="password"
            component="span"
            className="text-left text-red-600"
          />
          <Field
            name="confirmPassword"
            as={Input}
            placeholder="Confirm password"
            type="password"
          />
          <ErrorMessage
            name="confirmPassword"
            component="span"
            className="text-left text-red-600"
          />
          <LoginButton className="uppercase" type="submit">
            Registration
          </LoginButton>
        </div>
        <p>Already have an account?</p>
        <a className="text-shadow-amber-500"> Login</a>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
