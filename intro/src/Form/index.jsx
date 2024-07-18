import { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const heandelNameChange = ({ target: { value } }) => {
    setName(value);
  };
  const heandelEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const heandelPasswordlChange = ({ target: { value } }) => {
    setPassword(value);
  };

  return (
    <div>
      <h2>Some form</h2>
      <form className={styles.form}>
        <lable>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={heandelNameChange}
          />
        </lable>
        <lable>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={heandelEmailChange}
          />
        </lable>
        <lable>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={heandelPasswordlChange}
          />
        </lable>
        <button className={styles.buttonSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
