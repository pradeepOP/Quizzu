import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().min(2).required("Email is required!"),
  password: yup.string().min(6).required("Enter your password!"),
});
