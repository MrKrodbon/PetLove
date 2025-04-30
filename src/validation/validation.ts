import * as Yup from "yup";
import { ref } from "yup";

export const validationRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short name")
    .max(30, "Too long name")
    .required("Field name is required"),
  email: Yup.string()
    .email("Email must be valid")
    .required("Email name is required"),
  password: Yup.string()
    .min(7, "Password length must be at least 7 characters")
    .required("Password  is required"),
  confirmPassword: Yup.string().oneOf(
    [ref("password")],
    "Password do not match"
  ),
});
