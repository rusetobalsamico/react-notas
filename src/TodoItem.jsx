import React from "react";
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";


function TodoItem({todo, remove, tabIndex, onChange}) {
  const labelId = `checkbox-list-label-${todo.id}`;

  const removeTodo = () => {
    remove(todo.id)
  }

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
          <CommentIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={tabIndex}
            disableRipple
            onChange={event => onChange(event)}
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.text} />
      </ListItemButton>
    </ListItem>
  );
}

export default TodoItem;
