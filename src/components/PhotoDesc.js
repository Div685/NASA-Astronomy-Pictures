import React from 'react';
import PropTypes from 'prop-types';

const PhotoDesc = ({ photo }) => {
  const {
    title, date, explanation, url,
  } = photo;
  return (
    <div>
      <p>{title}</p>
      <p>
        {' '}
        {date}
        {' '}
      </p>
      <p>
        {' '}
        {explanation}
        {' '}
      </p>
      <img src={url} alt="i" />
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
  }).isRequired,
};
