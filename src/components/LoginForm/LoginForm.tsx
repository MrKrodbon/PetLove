import { FormikHelpers } from "formik";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store.ts";
import FormTemplate from "../FormTemplate/FormTemplate.tsx";
import { formSubmit, FormValues } from "../../utilities/formSubmit.ts";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useSelector((state: StoreType) => state.auth.error);

  const formFields = [
    { name: "email", placeholder: "email" },
    { name: "password", placeholder: "password" },
  ];

  const onSubmitHandle = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    formSubmit(values, actions, "login", dispatch, errorMessage);
  };

  return (
    <div className="flex flex-col gap-4">
      <FormTemplate
        fields={formFields}
        buttonText="Log in"
        type={{ pageType: "login" }}
        onSubmit={onSubmitHandle}
        initialValues={initialValues}
        footer={
          <>
            <p>Don't have an account?</p>
            <a className="text-shadow-amber-500">Register</a>
          </>
        }
      />
    </div>
  );
};

export default LoginForm;
