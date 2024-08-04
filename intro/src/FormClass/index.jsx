import React, { Component } from "react";
import styles from "./Form.module.css";

class FormClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleNameChange({ target: { value } }) {
    this.setState({ name: value });
  }

  handleEmailChange({ target: { value } }) {
    this.setState({ email: value });
  }

  handlePasswordChange({ target: { value } }) {
    this.setState({ password: value });
  }

  render() {
    return (
      <div>
        <h2>Форма</h2>
        <form className={styles.form}>
          <label>
            <span>Ім'я</span>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </label>
          <label>
            <span>Пароль</span>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <button className={styles.buttonSubmit} type="submit">
            Відправити
          </button>
        </form>
      </div>
    );
  }
}

export default FormClass;
