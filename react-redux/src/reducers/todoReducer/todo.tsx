import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../../actions/actionTypes";
import { TodoActionTypes, TodoDetails } from "../../interfaces/todo";

// Define initial state as an array of TodoDetails
const initialState: TodoDetails[] = [];

const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoDetails[] => {
  switch (action.type) {
    case ADD_TODO:
      // Return new state with added todo
      return [...state, action.payload];

    case REMOVE_TODO:
      // Return new state with todos filtered out by id
      return state.filter((todo) => todo.id !== action.payload);

    case EDIT_TODO:
      // Return new state with updated todo
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );

    default:
      return state;
  }
};

export default todoReducer;
