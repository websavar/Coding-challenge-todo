import React, { useState } from 'react';
import * as todoActions from '../store/todoActions';
import { useDispatch } from 'react-redux';

function TodoItem() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const addTodoClickHandler = (event) => {
    event.preventDefault();
    if (!input) return;
    dispatch(todoActions.add(input));
    setInput('');
  }

  const addTodoInputHandler = (e) => {
    if (!e.target.value) return;
    setInput(e.target.value);
  }

  return (
    <div className="form">
      <input
        type="text"
        data-element="addTodoInput"
        autoFocus
        value={input}
        onChange={addTodoInputHandler}
        onKeyDown={(e) => { if (e.code === 'Enter' || e.code === 'NumpadEnter') addTodoClickHandler(e) }}
      />
      <button
        data-element="addTodoButton"
        onClick={addTodoClickHandler}
        disabled={!input}
      >Add
      </button>
    </div>
  )
}

export default TodoItem;