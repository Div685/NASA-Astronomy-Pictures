import { FILTER_PHOTO_FAILUR, FILTER_PHOTO_LOADING, FILTER_PHOTO_SUCCESS } from '../actions/actionType';

const filtersReducerDefaultState = {
  photo: {},
  error: null,
  loading: false,
};

const filterPhotoReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case FILTER_PHOTO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FILTER_PHOTO_SUCCESS:
      return {
        ...state,
        photo: action.filter,
        loading: false,
      };
    case FILTER_PHOTO_FAILUR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default filterPhotoReducer;
