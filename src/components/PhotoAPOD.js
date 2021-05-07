/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/css/PhotoAPOD.css';

const PhotoAPOD = ({ photo }) => {
  const {
    date, title, url, media_type,
  } = photo;

  return (
    <Link to={`/photo/${date}`} className="">
      <div className="photo-details">
        <figure>
          { media_type !== 'image'
            ? (
              <img src="https://apod.nasa.gov/apod/image/2104/M106-NOAO-HST-1024c.jpg" alt="images" />
            )
            : (
              <img src={url} alt="images" />) }
          <figcaption className="font-weight-bold">{title}</figcaption>
        </figure>
      </div>
    </Link>
  );
};

export default PhotoAPOD;

PhotoAPOD.propTypes = {
  photo: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    media_type: PropTypes.string,
  }).isRequired,
};
