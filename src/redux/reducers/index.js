import { combineReducers } from 'redux';
import photos from './photosReducer';
import singlePhoto from './singlePhotoReducer';

export default combineReducers({
  photos,
  singlePhoto,
});
