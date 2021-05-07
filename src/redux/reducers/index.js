import { combineReducers } from 'redux';
import photos from './photosReducer';
import singlePhoto from './singlePhotoReducer';
import filter from './filter';

const rootReducer = combineReducers({
  photos,
  singlePhoto,
  filter,
});

export default rootReducer;
