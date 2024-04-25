import { useState } from "react";
import { CssBaseline } from "@mui/material";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      {/* <h1>mama esta presa</h1> */}
      <TodoList />
    </>
  );
}

export default App;
