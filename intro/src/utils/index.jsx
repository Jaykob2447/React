import * as yup from "yup";

export const USER_LOGI_IN_SCHEMA = yup.object({
  userLogin: yup
    .string()
    .trim()
    .min(3)
    .max(32)
    .required("Обовьязкове поле для введення"),
  userPassword: yup
    .string()
    .trim()
    .min(6)
    .max(64)
    .required("Обовьязкове поле для введення"),
});
