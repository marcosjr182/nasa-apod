import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import FeaturedPage from './pages/FeaturedPage';
import store from './store';

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact={true} path="/featured/:date" component={FeaturedPage} />
          <Route exact={true} path="/featured" component={FeaturedPage} />
          <Route path="*">
            <Redirect to="/featured" />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
