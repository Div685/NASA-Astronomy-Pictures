import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PhotoAPOD = ({ photo }) => {
  const {
    date, title, url,
  } = photo;
  return (
    <Link to={`/photo/${date}`}>
      <div>
        <img src={url} alt="images" />
        <button type="button" className="btn_title">{title}</button>
      </div>
    </Link>
  );
};

export default PhotoAPOD;

PhotoAPOD.propTypes = {
  photo: PropTypes.shape({
    date: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
