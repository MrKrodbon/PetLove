import { Field, Form, Formik, FormikHelpers } from "formik";
import { LoginButton } from "../../layouts/Header/Header.styles";
import { login } from "../../redux/auth/operations.ts";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { Input } from "../../common/styles.ts";

interface authUser {
  email: string;
  password: string;
}

const initialState: authUser = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const onFormSubmitHandle = (
    values: authUser,
    actions: FormikHelpers<authUser>
  ) => {
    const trimmedValues = {
      email: values.email.trim(),
      password: values.password,
    };

    dispatch(login({ ...trimmedValues }));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={onFormSubmitHandle}
      className="flex flex-col gap-8"
    >
      <Form className="w-fit">
        <div className="flex flex-col gap-4 w-fit">
          <Field name="email" as={Input} placeholder="Email" />
          <Field name="password" as={Input} placeholder="Password" />
          <LoginButton className="uppercase" type="submit">
            Log in
          </LoginButton>
        </div>
        <p>
          Don't have an account?{" "}
          <a className="text-shadow-amber-500">Register</a>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
