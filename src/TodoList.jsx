import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const initialTodos = [
  { id: 1, text: "Walk the dog", completed: false },
  { id: 5, text: "Walk the fish", completed: true },
  { id: 2, text: "Walk the cat", completed: false },
  { id: 8, text: "Walk the tiger", completed: false },
  { id: 7, text: "Walk the Mirtha", completed: true },
];

const initialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

function TodoList() {
  const [todos, setTodos] = useState(initialData);
  //const [checked, setChecked] = useState([0]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const addTodo = (text) => {
    //console.log('ADD TO DO!');
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: text, id: crypto.randomUUID(), completed: false },
      ];
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    });
  };

  // console.log(todos);
  return (
    <ul style={{ padding: 0 }}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            //removeTodo={() => removeTodo(todo.id)}
            remove={removeTodo}
            toggle={() => toggleTodo(todo.id)}
          />
        );
      })}
      <TodoForm addTodo={addTodo} />
    </ul>
  );
}

export default TodoList;
