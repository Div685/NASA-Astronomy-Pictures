import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PhotoAPODList from '../container/PhotoAPODList';
import PhotoDetails from '../container/PhotoDetails';

const Routes = () => (
  <div className="main-routes">
    <Router>
      <Switch>
        <Route exact path="/">
          <PhotoAPODList />
        </Route>
        <Route exact path="/photo/:date">
          <PhotoDetails />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default Routes;
