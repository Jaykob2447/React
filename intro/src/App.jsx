import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/RouterPlug/Home";
import Components from "./components/RouterPlug/components";
import About from "./components/RouterPlug/About";
import FormikReg from "./components/FormikReg";
import UserRedux from "./components/UsersRedux";
import TodoApp from "./components/TodoApp";
// import Slider from "./components/Slider";
// import FormClass from "./FormClass";
// import Card from "./userCard";
// import UserList from "./UserList";
// import Form from "./Form";

// const user = { isMale: true, followers: 12533 };  //for Card
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
        </Routes>
      </Router>
      {/* <Card user={user} /> */}
      {/*<UserList />*/}
      {/* {<Form />} */}
      {/* <Slider /> */}
      {/* <FormClass /> */}
    </>
  );
}

export default App;
