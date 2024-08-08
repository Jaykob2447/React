import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">to main page</Link>
      <Link to="/components">components</Link>
      <Link to="/about">about</Link>
      <Link to="/formik">Less Formik</Link>
    </>
  );
}

export default Header;
