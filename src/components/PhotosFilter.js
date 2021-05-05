import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

const PhotosFilter = ({ handleFilterChange }) => {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <div className="d-flex justify-content-center align-items-center mr-3">
      <input
        className="form-control w-25"
        type="date"
        onChange={(e) => handleFilterChange(e.target.value)}
      />

      <Router>
        <Switch>
          <Route exact path="/">
            <button type="button" className="btn btn-danger ml-3" onClick={refresh}>Clear Filter</button>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({ photo: state.filter.photo });
export default connect(mapStateToProps)(PhotosFilter);

PhotosFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
