import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';

// App
import App from './App';

// Utils
import * as serviceWorker from './utils/serviceWorker';
import createStore from './store';

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
