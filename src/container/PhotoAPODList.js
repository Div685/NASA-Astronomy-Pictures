/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PhotoAPOD from '../components/PhotoAPOD';
import { filterPhotoRequest, photosRequest } from '../redux/thunkFunction';
import { filterPhotosByDate, mapPhotoInfo } from '../redux/getData';
import PhotosFilter from '../components/PhotosFilter';

function PhotoAPODList({ filter, photosList }) {
  const [photoList, setPhotoList] = useState([]);
  useEffect(() => { photosRequest(); }, []);
  useEffect(() => { setPhotoList(photosList); }, [photosList]);
  useEffect(() => { setPhotoList([filter.photo]); }, [filter.photo.date]);

  const handleFilterChange = async (date) => {
    console.log((date));
    await filterPhotoRequest(date);
  };

  return (
    <div>
      <PhotosFilter handleFilterChange={handleFilterChange} />
      <div>
        {
            photoList && photoList.length
              ? photoList.map((photo) => (
                <PhotoAPOD key={photo} photo={photo} />
              ))
              : (<h1> No data found! </h1>)
          }
      </div>
    </div>
  );
}

const mapStateToProps = ({ photos, filter }) => ({
  photosList: mapPhotoInfo(photos),
  filter,
});
// const mapStateToProps = (state) => ({ photosList: filterPhotosByDate(state) });

const mapDispatchToProps = {
  filterPhotoRequest,
};

PhotoAPODList.propTypes = {
  photosList: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    media_type: PropTypes.string.isRequired,
  })).isRequired,
  filter: PropTypes.shape({
    photo: PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      media_type: PropTypes.string,
    }),
  }).isRequired,
  // date: PropTypes.string.isRequired,
  // filterPhotoRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoAPODList);
