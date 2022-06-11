import React, { useState } from 'react';
import * as todoActions from '../store/todoActions';
import { useDispatch } from 'react-redux';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(todo.completed);

  const toggleHandler = () => {
    dispatch(todoActions.toggle(todo.id));
    setChecked(!checked);
  }

  return (
    <li className={`todos__item todos__item_${todo.completed && 'checked'}`}>
      <input
        type="checkbox"
        data-element="toggleTodo"
        data-id={todo.id}
        checked={checked}
        onChange={toggleHandler}
      />
      {todo.title}
    </li>
  )
}

export default TodoItem;