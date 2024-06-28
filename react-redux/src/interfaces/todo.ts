import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../actions/actionTypes";

export interface TodoDetails {
  id?: string;
  text: string;
  date: string;
  time: string;
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: TodoDetails;
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: string;
}

export interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: { id: string; text: string };
}

export type TodoActionTypes = AddTodoAction | RemoveTodoAction | EditTodoAction;
