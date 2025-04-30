import { Field, Form, Formik } from "formik";
import { RegisterButton } from "../../layouts/Header/Header.styles";
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

  const onFormSubmitHandle = (values: authUser, actions) => {
    const trimmedValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password,
    };

    dispatch(register({ ...trimmedValues }));
    console.log(trimmedValues);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={onFormSubmitHandle}
      validationSchema={validationRegisterSchema}
      className="flex flex-col gap-8"
    >
      <Form>
        <div className="flex flex-col gap-4">
          <Field name="name" as={Input} placeholder="Name" />

          <Field name="email" as={Input} placeholder="Email" />
          <Field name="password" as={Input} placeholder="Password" />
          <Field
            name="confirmPassword"
            as={Input}
            placeholder="Confirm password"
          />
        </div>
        <RegisterButton className="uppercase" type="submit">
          Registration
        </RegisterButton>
        <p>Already have an account?</p>
        <a className="text-shadow-amber-500"> Login</a>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
