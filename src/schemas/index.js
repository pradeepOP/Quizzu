import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().min(2).required("Email is required!"),
  password: yup.string().min(6).required("Enter your password!"),
});

export const registerSchema = yup.object({
  fullname: yup.string().min(2).max(25).required("Fullname is requried"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).required("Enter your password!"),
});
