import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { ReactNode } from "react";
import { FormValues } from "@/utilities/formSubmit.ts";
import s from "./FormTamplate.module.scss";
import { Button } from "@/components/Button/Button.tsx";
import { Input, InputVariant } from "@/components/Input/Input.tsx";

// interface InitialValues {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

interface FormInputFields {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  variant?: InputVariant;
}

interface FormTemplateProps {
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
      <Form className="flex flex-col items-center w-full">
        <div className={s.formContainer}>
          {fields.map((field) => (
            <>
              <Field as={Input} {...field} name={field.name} />
              <ErrorMessage
                name={field.name}
                component="span"
                className="text-left text-red-600"
              />
            </>
          ))}
          <Button type="submit" className={s.button} label={buttonText} />
        </div>
        {footer}
      </Form>
    </Formik>
  );
};

export default FormTemplate;
