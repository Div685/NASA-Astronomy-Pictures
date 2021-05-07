import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

const PhotosFilter = ({ handleFilterChange, date }) => {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <div className="d-flex flex-column d-md-flex flex-md-row justify-content-center align-items-center mr-md-3 ">
      <input
        className="form-control w-100 col-md-8 col-lg-4"
        type="date"
        onChange={(e) => handleFilterChange(e.target.value)}
        max={date()}
      />

      <Router>
        <Switch>
          <Route exact path="/">
            <button type="button" className="btn btn-danger ml-md-3 my-1 w-100 col-lg-2" onClick={refresh}>Clear Filter</button>
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
  date: PropTypes.func.isRequired,
};
