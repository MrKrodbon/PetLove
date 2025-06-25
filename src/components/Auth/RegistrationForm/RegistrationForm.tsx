import { FormikHelpers } from "formik";
import FormTemplate from "@/components/layouts/FormTemplate/FormTemplate.tsx";
import { formSubmit, FormValues } from "@/utilities/formSubmit.ts";
import { useSelector } from "react-redux";
import { StoreType } from "@/redux/store.ts";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { NavLink } from "react-router-dom";
import { authLinks } from "@/constants/appLinks/appLinks.ts";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const errorMessage = useSelector((state: StoreType) => state.auth.error);

  const formFields = [
    { name: "name", placeholder: "Name" },
    { name: "email", placeholder: "email" },
    { name: "password", placeholder: "password" },
    { name: "confirmPassword", placeholder: "confirmPassword" },
  ];

  const onSubmitHandle = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    formSubmit(values, actions, "register", dispatch, errorMessage);
  };

  return (
    <div className="flex flex-col gap-4">
      <FormTemplate
        fields={formFields}
        buttonText="Register"
        type={{ pageType: "register" }}
        onSubmit={onSubmitHandle}
        initialValues={initialValues}
        footer={
          <>
            <p className="text-black">Already have an account?</p>
            <NavLink className="text-shadow-amber-500" to={authLinks.login.to}>
              Login
            </NavLink>
          </>
        }
      />
    </div>
  );
};

export default RegistrationForm;
