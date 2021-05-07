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

  const heatMap = () => (
    <>
      <div className="photo__heatmap row">
        <div className=" col-5 p-3">
          <div className="heatmap__left" />
          <div className="heatmap__date" />
        </div>
        <div className="heatmap__image col-6" />
      </div>
    </>

  );

  return (
    <div className="photo__detail">
      {
        photo ? <PhotoDesc photo={photo} /> : (heatMap())
      }
    </div>
  );
};

const mapStateToProps = (state) => ({ photo: state.singlePhoto.photo });

PhotoDetails.propTypes = {
  photo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

PhotoDetails.defaultProps = {
  photo: null,
};

export default connect(mapStateToProps)(PhotoDetails);
