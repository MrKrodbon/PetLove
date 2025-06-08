import { FormikHelpers } from "formik";
import { useAppDispatch } from "../../hooks/hooks.ts";
import FormTemplate from "../FormTemplate/FormTemplate.tsx";
import { formSubmit, FormValues } from "../../utilities/formSubmit.ts";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store.ts";

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
        type="register"
        onSubmit={onSubmitHandle}
        initialValues={initialValues}
        footer={
          <>
            <p>Already have an account?</p>
            <a className="text-shadow-amber-500">Login</a>
          </>
        }
      />
    </div>
  );
};

export default RegistrationForm;
