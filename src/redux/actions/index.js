import {
  FETCH_PHOTOS_LOADING,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  SINGLE_PHOTO_LOADING,
  SINGLE_PHOTO_SUCCESS,
  SINGLE_PHOTO_FAILUR,
  FILTER_START_DATE,
  FILTER_END_DATE,
  FILTER_PHOTO_LOADING,
  FILTER_PHOTO_SUCCESS,
  FILTER_PHOTO_FAILUR,

} from './actionType';

const fetchPhotosLoading = () => ({
  type: FETCH_PHOTOS_LOADING,
});

const fetchPhotosSuccess = (photos) => ({
  type: FETCH_PHOTOS_SUCCESS,
  photos,
});

const fetchPhotosFailure = (error) => ({
  type: FETCH_PHOTOS_FAILURE,
  error,
});

const singlePhotoLoading = () => ({
  type: SINGLE_PHOTO_LOADING,
});

const singlePhotoSuccess = (photo) => ({
  type: SINGLE_PHOTO_SUCCESS,
  photo,
});

const singlePhotoFailur = (error) => ({
  type: SINGLE_PHOTO_FAILUR,
  error,
});

const filterPhotoLoading = () => ({
  type: FILTER_PHOTO_LOADING,
});

const filterPhotoSuccess = (filter) => ({
  type: FILTER_PHOTO_SUCCESS,
  filter,
});

const filterPhotoFailur = (error) => ({
  type: FILTER_PHOTO_FAILUR,
  error,
});

const filterStartDate = (startDate) => ({
  type: FILTER_START_DATE,
  startDate,
});

const filterEndDate = (endDate) => ({
  type: FILTER_END_DATE,
  endDate,
});

export {
  fetchPhotosLoading,
  fetchPhotosSuccess,
  fetchPhotosFailure,
  singlePhotoLoading,
  singlePhotoSuccess,
  singlePhotoFailur,
  filterPhotoLoading,
  filterPhotoSuccess,
  filterPhotoFailur,
  filterStartDate,
  filterEndDate,
};
