/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/PhotoDetail.css';

const PhotoDesc = ({ photo }) => {
  const {
    title, date, explanation, url, media_type,
  } = photo;
  return (
    <div className="photo__detail-main d-flex flex-column flex-md-row text-white">
      <div className="left__side col-12 col-md-6 p-3">
        <h3 className="h2 text-uppercase font-weight-bold mt-3 mx-0 mb-0 p-0">{title}</h3>
        <span className="mt-n2">
          {date}
        </span>
        <p className="mt-3 text-justify">
          {explanation}
        </p>
      </div>
      <div className="right__side w-100">
        {
          media_type === 'video'
            ? <img src="https://apod.nasa.gov/apod/image/2104/M106-NOAO-HST-1024c.jpg" alt="images" className="w-100" />
            : <img src={url} alt="i" className="w-100" />
        }
      </div>
    </div>
  );
};

export default PhotoDesc;

PhotoDesc.propTypes = {
  photo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    media_type: PropTypes.string.isRequired,
  }).isRequired,
};
