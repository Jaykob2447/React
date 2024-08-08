import { Field, Formik, Form, ErrorMessage } from "formik";
import { USER_LOGI_IN_SCHEMA } from "../../utils";
import styles from "./FormikReg.module.sass";

function FormikReg() {
  const initVal = { userLogin: "", userPassword: "" };
  const heandelSubmit = (value, formibBag) => {
    console.log(value);
    formibBag.resetForm();
  };
  return (
    <Formik
      initialValues={initVal}
      onSubmit={heandelSubmit}
      validationSchema={USER_LOGI_IN_SCHEMA}
    >
      <Form className={styles.formSingIn}>
        <label className={styles.labels}>
          <span>Login </span>
          <div className={styles.wrapField}>
            <Field
              className={styles.field}
              type="text"
              name="userLogin"
              placeholder="Your login"
              autoFocus
            />
            <ErrorMessage
              className={styles.errMessage}
              name="userLogin"
              component="span"
            />
          </div>
        </label>
        <label className={styles.labels}>
          <span>Password </span>
          <div className={styles.wrapField}>
            <Field
              className={styles.field}
              type="text"
              name="userPassword"
              placeholder="Your password"
            />
            <ErrorMessage
              className={styles.errMessage}
              name="userPassword"
              component="span"
            />
          </div>
        </label>
        <button type="submit">Enter</button>
        <button type="reset">Reset</button>
      </Form>
    </Formik>
  );
}

export default FormikReg;
