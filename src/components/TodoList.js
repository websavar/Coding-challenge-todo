import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <ul className="todos">
      {!todos.length ? <div>There is no task todo!</div> :
        todos.map(todoItem =>
          <TodoItem key={todoItem.id} todo={todoItem} />
        )}
    </ul>
  )
}

export default TodoList;