import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { removeTodo } from "./actions/actionCreators";
import { TodoDetails } from "./interfaces/todo";

interface Props {
  setEditTodo: (todo: TodoDetails) => void;
}

const DisplayTodoList: React.FC<Props> = ({ setEditTodo }) => {
  const todos = useSelector((state: { todos: TodoDetails[] }) => state.todos);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<TodoDetails | null>(null);

  const handleDelete = useCallback(
    (id: string) => {
      setCurrentTodo(todos.find((todo) => todo.id === id) || null);
      setOpen(true);
    },
    [todos]
  );

  const confirmDelete = () => {
    if (currentTodo && currentTodo.id) {
      dispatch(removeTodo(currentTodo.id));
    }
    setOpen(false);
    setCurrentTodo(null);
  };

  const handleEdit = (todo: TodoDetails) => {
    setEditTodo(todo);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Todo</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo: TodoDetails) => (
              <TableRow key={todo.id}>
                <TableCell>{todo.text}</TableCell>
                <TableCell>{todo.date}</TableCell>
                <TableCell>{todo.time}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(todo)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => todo.id && handleDelete(todo.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this todo?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DisplayTodoList;
