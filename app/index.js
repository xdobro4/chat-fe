import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import io from 'socket.io-client';
import chat from './reducers';
import App from './components/App';
import {showMessage} from './actions/messages';
import messageMiddleware from './middleware/message';

import '../styles/app.css';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const createStoreWithMiddleware = applyMiddleware(
  messageMiddleware(socket)
)(createStore);

const store = (window.devToolsExtension ? window.devToolsExtension()(createStoreWithMiddleware) : createStoreWithMiddleware)(chat);

socket.on('chat message', (msg) =>
  store.dispatch(showMessage(msg.id, msg.text, msg.autor, msg.created))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('body')
);
