import { getDateFilteredPhoto, getPhotos, getSinglePhoto } from '../api/requests';
import {
  fetchPhotosFailure,
  fetchPhotosLoading,
  fetchPhotosSuccess,

  filterPhotoFailur,
  filterPhotoLoading,

  filterPhotoSuccess,

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

export const filterPhotoRequest = async (date) => {
  store.dispatch(filterPhotoLoading());
  try {
    const data = await getDateFilteredPhoto(date);
    store.dispatch(filterPhotoSuccess(data));
  } catch (e) {
    store.dispatch(filterPhotoFailur(e));
  }
};
