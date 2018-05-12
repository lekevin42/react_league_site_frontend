import React from 'react';
import {render, ReactDOM} from 'react-dom';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import {AppContainer} from "react-hot-loader";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Champion from './components/championComponents/Champion';
import {useStrict} from "mobx";
import {Provider} from "mobx-react";

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


           <Route exact path="/" component={Champion} />
         </div>
      </Router>
      </Provider>
  </AppContainer>, document.getElementById("root"));
};

renderApp(Champion);

if (module.hot) {
  module.hot.accept(() => renderApp(Champion));
}
