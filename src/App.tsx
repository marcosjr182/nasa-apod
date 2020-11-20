import React, { FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import FeaturedPage from './pages/FeaturedPage';

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/featured/:date" component={FeaturedPage} />
        <Route exact={true} path="/featured" component={FeaturedPage} />
        <Route path="*">
          <Redirect to="/featured" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
