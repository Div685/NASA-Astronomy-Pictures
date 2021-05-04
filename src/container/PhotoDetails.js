import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { singlePhotoRequest } from '../redux/thunkFunction';
import PhotoDesc from '../components/PhotoDesc';

const PhotoDetails = ({ photo }) => {
  const { date } = useParams();

  useEffect(() => {
    singlePhotoRequest(date);
  }, []);

  return (
    <div>
      {
        photo ? <PhotoDesc photo={photo} /> : <h1>No Data Found!</h1>
      }
    </div>
  );
};

const mapStateToProps = (state) => ({ photo: state.singlePhoto.photo });

PhotoDetails.propTypes = {
  photo: PropTypes.shape({
    titlle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

// PhotoDetails.defaultProps = {
//   photo: null,
// };

export default connect(mapStateToProps)(PhotoDetails);
