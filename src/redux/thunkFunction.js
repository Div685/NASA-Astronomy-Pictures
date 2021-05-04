import { getPhotos, getSinglePhoto } from '../api/requests';
import {
  fetchPhotosFailure,
  fetchPhotosLoading,
  fetchPhotosSuccess,
  singlePhotoFailur,
  singlePhotoLoading,
  singlePhotoSuccess,
} from './actions/index';
import store from './store';

export const photosRequest = () => {
  store.dispatch(fetchPhotosLoading());
  const requestPhotos = getPhotos();
  requestPhotos.then((data) => {
    store.dispatch(fetchPhotosSuccess(data));
  }).catch((error) => {
    store.dispatch(fetchPhotosFailure(error));
  });
};

export const singlePhotoRequest = (date) => {
  store.dispatch(singlePhotoLoading());
  const requestSinglePhoto = getSinglePhoto(date);
  requestSinglePhoto.then((data) => {
    store.dispatch(singlePhotoSuccess(data));
  }).catch((error) => {
    store.dispatch(singlePhotoFailur(error));
  });
};
