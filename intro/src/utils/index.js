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

export const TASK_SCHEMA = yup.object({
  task: yup
    .string()
    .trim()
    .min(3)
    .max(1024)
    .matches(/^[A-Z]/, "Must start with big latter")
    .required("Обовьязкове поле для введення"),
});
