import { FILTER } from './todoActions';
import { Filters } from "../constants"

const initialState = Filters.ALL;

const Filter = (state = initialState, action) => {
  switch (action.type) {
    case FILTER: {
      return action.filter
    }
    default: {
      return state
    }
  }
}

export default Filter;