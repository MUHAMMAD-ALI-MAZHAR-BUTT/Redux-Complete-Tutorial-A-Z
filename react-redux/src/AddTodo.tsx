import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { editTodo, addTodo } from "./actions/actionCreators";
import { TodoDetails } from "./interfaces/todo";

interface Props {
  editTodoDetails: TodoDetails | null;
  setEditTodo: (todo: TodoDetails) => void;
}

const AddTodo: React.FC<Props> = ({ editTodoDetails, setEditTodo }) => {
  const [todoDetails, setTodoDetails] = useState<TodoDetails>({
    id: "",
    text: "",
    date: "",
    time: "",
  });

  const dispatch = useDispatch();

  const isSubmitDisabled = useMemo(() => {
    const { text, date, time } = todoDetails;
    return !(text && date && time);
  }, [todoDetails]);

  useEffect(() => {
    if (editTodoDetails) {
      setTodoDetails(editTodoDetails);
    }
  }, [editTodoDetails]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (todoDetails.text && todoDetails.date && todoDetails.time) {
        if (todoDetails.id) {
          dispatch(editTodo(todoDetails));
          setEditTodo({ id: "", text: "", date: "", time: "" });
        } else {
          dispatch(addTodo(todoDetails));
        }
        setTodoDetails({ id: "", text: "", date: "", time: "" });
      }
    },
    [dispatch, todoDetails, setEditTodo]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodoDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleClear = useCallback(() => {
    setTodoDetails({ id: "", text: "", date: "", time: "" });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Todo"
        variant="outlined"
        value={todoDetails.text}
        onChange={handleChange}
        fullWidth
        margin="normal"
        name="text"
      />
      <TextField
        label="Date"
        type="date"
        variant="outlined"
        value={todoDetails.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        name="date"
      />
      <TextField
        label="Time"
        type="time"
        variant="outlined"
        value={todoDetails.time}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        name="time"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitDisabled}
      >
        {todoDetails.id ? "Update" : "Submit"}
      </Button>
      <Button
        type="button"
        variant="outlined"
        color="secondary"
        onClick={handleClear}
      >
        Clear
      </Button>
    </form>
  );
};

export default AddTodo;
