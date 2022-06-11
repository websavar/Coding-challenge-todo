import React from 'react';
import { useSelector } from 'react-redux';
import { getTodosByFilter } from './store/selector';

import TodoForm from './components/TodoForm';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';

function App() {
  const store = useSelector(store => store.todos);
  const activeFilter = useSelector(store => store.filter);
  const filterTodos = getTodosByFilter(store, activeFilter);

  return (
    <>
      <TodoForm />
      <TodoFilters activeFilter={activeFilter} />
      <TodoList todos={filterTodos} />
    </>
  )
}

export default App;