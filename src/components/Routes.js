import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PhotoAPODList from '../container/PhotoAPODList';

const Routes = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <PhotoAPODList />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default Routes;
