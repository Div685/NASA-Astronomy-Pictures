import { FILTER_END_DATE, FILTER_START_DATE } from '../actions/actionType';

const filtersReducerDefaultState = {
  startDate: undefined,
  endDate: undefined,
};

const filterPhotoReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case FILTER_START_DATE:
      return {
        ...state,
        startDate: action.startDate,
      };
    case FILTER_END_DATE:
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

export default filterPhotoReducer;
