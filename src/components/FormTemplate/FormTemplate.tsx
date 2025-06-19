import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { ReactNode } from "react";
import { FormValues } from "../../utilities/formSubmit.ts";
import { PageType } from "../../types/types.ts";
import css from "./FormTamplate.module.scss";
import Input from "./Input/Input.tsx";

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
  type: PageType;
  initialValues: FormValues;
  fields: FormInputFields[];
  buttonText: string;
  onSubmit: (values: FormValues, actions: FormikHelpers<FormValues>) => void;
  footer?: ReactNode;
}

const FormTemplate = ({
  initialValues,
  fields,
  buttonText,
  onSubmit,
  footer,
}: FormTemplateProps) => {
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
          <button
            className={`${css["form-template--login"]} uppercase`}
            type="submit"
          >
            {buttonText}
          </button>
        </div>
        {footer}
      </Form>
    </Formik>
  );
};

export default FormTemplate;
