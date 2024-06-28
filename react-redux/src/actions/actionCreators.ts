import { v4 as uuidv4 } from "uuid";
import { TodoDetails } from "../interfaces/todo";
import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./actionTypes";

export const addTodo = (todo: TodoDetails) => ({
  type: ADD_TODO,
  payload: { ...todo, id: uuidv4() },
});

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const editTodo = (todo: TodoDetails) => ({
  type: EDIT_TODO,
  payload: todo,
});
