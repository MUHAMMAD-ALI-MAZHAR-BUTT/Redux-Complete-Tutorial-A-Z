import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./../reducers/index";

const store = createStore(rootReducer as any, composeWithDevTools());

export default store;
