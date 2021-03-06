import React from 'react';
import {render} from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {AppContainer} from "react-hot-loader";
import './index.css';
import LandingPage from './components/landingPageComponents/LandingPage';
import Champion from './components/championPageComponents/Champion';
import {Provider} from "mobx-react";

import Dashboard from './components/Dashboard';
import championStore from './stores/championStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';

const stores = {
  championStore
};

const renderApp = Component => {
  render(
    <AppContainer>
    <Provider {...stores}>
      <Router history={true}>
        <div>
           <Route exact path="/" component={LandingPage} />
         </div>
      </Router>
      </Provider>
  </AppContainer>, document.getElementById("root"));
};

renderApp(Dashboard);

if (module.hot) {
  module.hot.accept(() => renderApp(Champion));
}
