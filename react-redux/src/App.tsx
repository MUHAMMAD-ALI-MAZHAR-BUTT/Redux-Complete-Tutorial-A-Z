import { useState } from "react";
import { Container, Typography } from "@mui/material";
import AddTodo from "./AddTodo";
import DisplayTodoList from "./DisplayTodoList";
import { TodoDetails } from "./interfaces/todo";

function App() {
  const [editTodoDetails, setEditTodoDetails] = useState<TodoDetails | null>(
    null
  );

  return (
    <Container>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ marginTop: 2 }}
      >
        Todo List using Redux
      </Typography>
      <AddTodo
        editTodoDetails={editTodoDetails}
        setEditTodo={setEditTodoDetails}
      />
      <DisplayTodoList setEditTodo={setEditTodoDetails} />
    </Container>
  );
}

export default App;
