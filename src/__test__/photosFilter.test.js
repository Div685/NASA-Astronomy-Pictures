/* eslint-disable no-unused-vars */
import filter from '../redux/reducers/filter';
import { FILTER_PHOTO_FAILUR, FILTER_PHOTO_LOADING, FILTER_PHOTO_SUCCESS } from '../redux/actions/actionType';

const examplePhoto = { title: 'The Sun' };

const initialFilterState = {
  photo: {},
  requesting: false,
  error: null,
};

const photoSuccessAction = {
  filter: examplePhoto,
  type: FILTER_PHOTO_SUCCESS,
};

describe('Filter Reducer', () => {
  it('should check filter success state', () => {
    const result = filter(initialFilterState, photoSuccessAction);
    expect(result.photo).toEqual(examplePhoto);
  });
});
