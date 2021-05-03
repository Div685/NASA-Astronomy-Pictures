import { combineReducers } from 'redux';
import photos from './photosReducer';
import singlePhoto from './singlePhotoReducer';

const rootReducer = combineReducers({
  photos,
  singlePhoto,
});

export default rootReducer;
