import { FETCH_PHOTOS_FAILURE, FETCH_PHOTOS_LOADING, FETCH_PHOTOS_SUCCESS } from '../actions/actionType';

const photoInitialState = {
  photos: [],
  requesting: false,
  error: null,
};

const photos = (state = photoInitialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_LOADING:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        error: action.error,
        requesting: false,
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.photos,
        requesting: false,
      };
    default:
      return state;
  }
};

export default photos;
