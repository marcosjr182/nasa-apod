import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import FeaturedPage from './pages/FeaturedPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/featured/:date" component={FeaturedPage} />
        <Route exact path="/featured" component={FeaturedPage} />
        <Route path="*">
          <Redirect to="/featured" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
