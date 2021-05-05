import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PhotoAPOD from '../components/PhotoAPOD';
import { filterPhotoRequest, photosRequest } from '../redux/thunkFunction';
import { mapPhotoInfo } from '../redux/getData';
import PhotosFilter from '../components/PhotosFilter';
import '../assets/css/PhotoAPOD.css';
import Banner from '../components/Banner';

function PhotoAPODList({ filter, photosList }) {
  const [photoList, setPhotoList] = useState([]);
  useEffect(() => { photosRequest(); }, []);
  useEffect(() => { setPhotoList(photosList); }, [photosList]);
  useEffect(() => { setPhotoList([filter.photo]); }, [filter.photo.date]);

  const handleFilterChange = async (date) => {
    await filterPhotoRequest(date);
  };

  const heatMap = () => (
    <>
      <div className="photo__details-heatmap">
        <div className="image" />
        <div className="figcaption" />
      </div>

      <div className="photo__details-heatmap">
        <div className="image" />
        <div className="figcaption" />
      </div>

      <div className="photo__details-heatmap">
        <div className="image" />
        <div className="figcaption" />
      </div>
    </>

  );

  return (
    <>
      <Banner />
      <div className="main-section">
        <PhotosFilter handleFilterChange={handleFilterChange} />
        <div className="photo-list row">
          {
            photoList && photoList.length
              ? photoList.map((photo) => (
                <PhotoAPOD key={photo} photo={photo} />
              ))
              : (heatMap())
          }
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ photos, filter }) => ({
  photosList: mapPhotoInfo(photos),
  filter,
});

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
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoAPODList);
