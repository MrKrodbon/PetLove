import { FormikHelpers } from "formik";
import { useAppDispatch } from "../hooks/useAppSelector";
import { login, register } from "../redux/auth/operations";

type FormType = "login" | "register";

interface LoginForm {
  email: string;
  password: string;
}

interface RegisterForm extends LoginForm {
  name: string;
  confirmPassword: string;
}

export type FormValues = LoginForm | RegisterForm;

export const formSubmit = (
  values: FormValues,
  actions: FormikHelpers<FormValues>,
  formType: FormType,
  dispatch: ReturnType<typeof useAppDispatch>,
  errorMessage: string | null
) => {
  if (formType === "login") {
    const { email, password } = values as LoginForm;
    const trimmedValues = {
      email: email.trim(),
      password: password,
    };

    dispatch(login({ ...trimmedValues }));
    if (errorMessage) {
      console.log(errorMessage);
      actions.resetForm();
    }
  }
  if (formType === "register") {
    const { name, email, password, confirmPassword } = values as RegisterForm;
    const trimmedValues = {
      name: name.trim(),
      email: email.trim(),
      password: password,
      confirmPassword: confirmPassword,
    };

    dispatch(register({ ...trimmedValues }));
    if (errorMessage) {
      console.log(errorMessage);
      actions.resetForm();
    }
  }

  actions.resetForm();
};
