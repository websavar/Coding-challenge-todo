import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";

import todosReducer from "./reducers/todos";
import filterReducer from "./reducers/filter";

const reducers = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

const store = createStore(
  reducers,
  applyMiddleware(logger)
);

export default store;