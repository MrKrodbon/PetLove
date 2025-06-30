import { FormikHelpers } from "formik";
import { useSelector } from "react-redux";
import { StoreType } from "@/redux/store.ts";
import { formSubmit, FormValues } from "@/utilities/formSubmit.ts";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { authLinks } from "@/constants/appLinks/appLinks";
import FormTemplate from "@/components/layouts/FormTemplate/FormTemplate";
import { BaseInputProps } from "@/components/Input/Input";
import FooterTemplate from "@/components/layouts/FormTemplate/FooterTemplate/FooterTemplate";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useSelector((state: StoreType) => state.auth.error);

  const formFields: BaseInputProps[] = [
    {
      name: "email",
      placeholder: "email",
      type: "text",
      variant: "auth",
    },
    {
      name: "password",
      placeholder: "password",
      type: "password",
      variant: "auth",
    },
  ];

  const onSubmitHandle = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    formSubmit(values, actions, "login", dispatch, errorMessage);
  };

  const registerLink = authLinks.find((item) => item.path === "/register");

  return (
    <FormTemplate
      fields={formFields}
      buttonText="Log in"
      onSubmit={onSubmitHandle}
      initialValues={initialValues}
      footer={
        <FooterTemplate
          title="Don't have an account?"
          link={registerLink?.path}
          linkLabel={"Register"}
        />
      }
    />
  );
};

export default LoginForm;
