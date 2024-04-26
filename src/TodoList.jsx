import { useState } from "react";
import TodoItem from "./TodoItem";
import { List } from "@mui/material";

const initialTodos = [
  { id: 1, text: "Walk the dog", completed: false },
  { id: 5, text: "Walk the fish", completed: true },
  { id: 2, text: "Walk the cat", completed: false },
  { id: 8, text: "Walk the tiger", completed: false },
  { id: 7, text: "Walk the Mirtha", completed: true },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  //const [checked, setChecked] = useState([0]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  // console.log(todos);
  return (
    <List>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            tabIndex={index}
            //removeTodo={() => removeTodo(todo.id)}
            remove={removeTodo}
          />
        );
      })}
    </List>
  );
}

export default TodoList;
