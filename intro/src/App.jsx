import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/RouterPlug/Home";
import Components from "./components/RouterPlug/components";
import About from "./components/RouterPlug/About";
import FormikReg from "./components/FormikReg";
import UserRedux from "./components/UsersRedux";
import TodoApp from "./components/TodoApp";
import Card from "./userCard";
// import FormClass from "./FormClass";
// import Slider from "./components/Slider";
// import UserList from "./UserList";
// import Form from "./Form";

const user = {
  isMale: true,
  followers: 12533,
  tweetsCount: 800,
  followingcount: 455,
}; //for Card
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/about" element={<About />} />
          <Route path="/formik" element={<FormikReg />} />
          <Route path="/userRedux" element={<UserRedux />} />
          <Route path="/Todo" element={<TodoApp />} />
          <Route path="/UserCard" element={<Card user={user} />} />
        </Routes>
      </Router>
      {/*<UserList />*/}
      {/* {<Form />} */}
      {/* <Slider /> */}
      {/* <FormClass /> */}
    </>
  );
}

export default App;
