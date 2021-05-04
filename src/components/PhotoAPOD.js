/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PhotoAPOD = ({ photo }) => {
  const {
    date, title, url, media_type,
  } = photo;
  return (
    <Link to={`/photo/${date}`}>
      <div>
        { media_type !== 'image'
          ? <img src="https://apod.nasa.gov/apod/image/2104/M106-NOAO-HST-1024c.jpg" alt="images" />
          : <img src={url} alt="images" />}
        <button type="button" className="btn_title">{title}</button>
        <span>{date}</span>
      </div>
    </Link>
  );
};

export default PhotoAPOD;

PhotoAPOD.propTypes = {
  photo: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    media_type: PropTypes.string.isRequired,
  }).isRequired,
};
