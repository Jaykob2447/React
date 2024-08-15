import { Link } from "react-router-dom";
import styles from "./Header.module.sass";
function Header() {
  return (
    <header>
      <ul className={styles.header}>
        <li>
          <Link to="/">to main page</Link>
        </li>
        <li>
          <Link to="/components">components</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/formik">Less Formik</Link>
        </li>
        <li>
          <Link to="/userRedux">User Redux</Link>
        </li>
        <li>
          <Link to="/Todo">Todo</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
