/* eslint-disable no-unused-vars */
import photos from '../redux/reducers/photosReducer';
import { FETCH_PHOTOS_FAILURE, FETCH_PHOTOS_LOADING, FETCH_PHOTOS_SUCCESS } from '../redux/actions/actionType';

const examplePhoto = [{ title: 'The earth' }, { title: 'The Planets' }];
const initialPhotoState = {
  photos: [],
  requesting: false,
  error: null,
};

const photoSuccessAction = {
  photos: examplePhoto,
  type: FETCH_PHOTOS_SUCCESS,
};

const photoLoadingAction = {
  type: FETCH_PHOTOS_LOADING,
};

const photoFailureAction = {
  type: FETCH_PHOTOS_FAILURE,
  error: 404,
};

describe('photosList reducer', () => {
  it('it shoud check initialState', () => {
    expect(photos(undefined, {})).toEqual(initialPhotoState);
  });

  describe('when state of photos is dispatched on FETCH_PHOTO_SUCESS', () => {
    it('should check FETCH_PHOTOS_SUCCESS Action', () => {
      const result = photos(initialPhotoState, photoSuccessAction);
      expect(result.photos).toEqual(examplePhoto);
    });

    it('should check Error state for Success Action', () => {
      const result = photos(initialPhotoState, photoSuccessAction);
      expect(result.error).toBe(null);
    });
  });

  describe('when state of photos is dispatch on FETCH_PHOTO_FAILURE', () => {
    it('should check Error Action', () => {
      const result = photos(initialPhotoState, photoFailureAction);
      expect(result.error).toEqual(404);
    });

    it('should check Loading state for Failure Action', () => {
      const result = photos(initialPhotoState, photoFailureAction);
      expect(result.requesting).toBe(false);
    });
  });

  describe('when state of photos is dispatch on FETCH_PHOTO_LOADIND', () => {
    it('should check Loading Action', () => {
      const result = photos(initialPhotoState, photoLoadingAction);
      expect(result.requesting).toBeTruthy();
    });

    it('should check Error state for Success Action', () => {
      const result = photos(initialPhotoState, photoLoadingAction);
      expect(result.photos).toEqual([]);
    });
  });
});
