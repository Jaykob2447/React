import { useState } from "react";
import "./App.css";
import Card from "./userCard";

const user = { isMale: true, followers: 12533 };
function App() {
  return (
    <>
      <Card user={user} />
    </>
  );
}

export default App;
