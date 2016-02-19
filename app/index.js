import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import chat from './reducers';
import App from './components/App';
import '../styles/app.css';

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(chat);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('body')
);
