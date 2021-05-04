import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PhotosFilter = ({ handleFilterChange }) => (
  <div>
    <input
      type="date"
      onChange={(e) => handleFilterChange(e.target.value)}
    />
  </div>
);

const mapStateToProps = (state) => ({ photo: state.filter.photo });
export default connect(mapStateToProps)(PhotosFilter);

PhotosFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
