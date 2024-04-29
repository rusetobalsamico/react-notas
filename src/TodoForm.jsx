import { useState } from "react";
import { IconButton, InputAdornment, ListItem, TextField } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="New Todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create todo" edge="end" type="submit">
                  <CreateIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
