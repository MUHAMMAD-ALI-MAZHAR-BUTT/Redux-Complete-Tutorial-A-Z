import { combineReducers } from "redux";
import todoReducer from "./todoReducer/todo";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
