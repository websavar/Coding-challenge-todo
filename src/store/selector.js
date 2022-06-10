import { Filters } from "../constants";

export const getTodosByFilter = (store, filter) => {
  switch (filter) {
    case Filters.COMPLETED:
      return store.todos.filter(todo => todo.completed);
    case Filters.INCOMPLETED:
      return store.todos.filter(todo => !todo.completed);
    default:
      return store.todos;
  }
}