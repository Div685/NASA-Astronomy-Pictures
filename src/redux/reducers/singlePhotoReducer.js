import { SINGLE_PHOTO_FAILUR, SINGLE_PHOTO_LOADING, SINGLE_PHOTO_SUCCESS } from '../actions/actionType';

const initalState = {
  photo: null,
  error: null,
  loading: false,
};

const singlePhoto = (state = initalState, action) => {
  switch (action.type) {
    case SINGLE_PHOTO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_PHOTO_SUCCESS:
      return {
        ...state,
        photo: action.photo,
        loading: false,
      };
    case SINGLE_PHOTO_FAILUR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default singlePhoto;
