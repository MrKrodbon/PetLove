import { FormikHelpers } from "formik";
import FormTemplate from "@/components/layouts/FormTemplate/FormTemplate.tsx";
import { formSubmit, FormValues } from "@/utilities/formSubmit.ts";
import { useSelector } from "react-redux";
import { StoreType } from "@/redux/store.ts";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { BaseInputProps } from "@/components/Input/Input";
import FooterTemplate from "@/components/layouts/FormTemplate/FooterTemplate/FooterTemplate";
import { authLinks } from "@/constants/appLinks/appLinks";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useSelector((state: StoreType) => state.auth.error);

  const formFields: BaseInputProps[] = [
    { name: "name", placeholder: "name", type: "text", variant: "auth" },
    { name: "email", placeholder: "email", type: "email", variant: "auth" },
    {
      name: "password",
      placeholder: "password",
      type: "password",
      variant: "auth",
    },
    {
      name: "confirmPassword",
      placeholder: "confirmPassword",
      type: "password",
      variant: "auth",
    },
  ];

  const onSubmitHandle = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    formSubmit(values, actions, "register", dispatch, errorMessage);
  };

  const loginLink = authLinks.find((item) => item.path === "/login");

  return (
    <FormTemplate
      fields={formFields}
      buttonText="Register"
      onSubmit={onSubmitHandle}
      initialValues={initialValues}
      footer={
        <FooterTemplate
          title="Already have an account?"
          link={loginLink?.path}
          linkLabel={"Login"}
        />
      }
    />
  );
};

export default RegistrationForm;
