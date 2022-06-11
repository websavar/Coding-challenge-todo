import React from 'react';
import * as todoActions from '../store/todoActions';
import { useDispatch } from 'react-redux';
import { Filters, FiltersLabel } from '../constants';

function TodoFilters({ activeFilter }) {
  const dispatch = useDispatch();

  return (
    <div className="filterItems">
      {Object.keys(Filters).map(filterkey => {
        const currentFilter = Filters[filterkey];
        return (
          <label key={currentFilter}>
            <input
              type="radio"
              name="filterTodo"
              id={currentFilter}
              onChange={() => dispatch(todoActions.filter(currentFilter))}
              checked={currentFilter === activeFilter}
            />
            <span>{FiltersLabel[filterkey]}</span>
          </label>
        )
      })}
    </div>
  )
}

export default TodoFilters;