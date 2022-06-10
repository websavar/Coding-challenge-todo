import { Filters } from "../../constants"

export const initialState = Filters.ALL;

const Filter = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER': {
      state = action.filterId;
    }
    default:
      state
  }
  return state;
}

export default Filter;