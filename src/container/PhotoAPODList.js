import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PhotoAPOD from '../components/PhotoAPOD';
import { photosRequest } from '../redux/thunkFunction';
import mapPhotoInfo from '../redux/getData';

function PhotoAPODList({ photosList }) {
  useEffect(() => {
    photosRequest();
  }, []);
  return (
    <div>
      <div>
        {
            photosList && photosList.length
              ? photosList.map((photo) => (
                <PhotoAPOD key={photo} photo={photo} />
              ))
              : (<h1> No data found! </h1>)
          }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ photosList: mapPhotoInfo(state.photos) });

PhotoAPODList.propTypes = {
  photosList: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(PhotoAPODList);
