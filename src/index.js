import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppComponent } from './components/app';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { store } from './helpers';

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
