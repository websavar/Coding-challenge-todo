import React from 'react';
import ReactDom from 'react-dom/client';

import store from './store';
import { Provider } from 'react-redux';

import App from './App';
import './main.css';

const rootElement = document.getElementById('demo');
const root = ReactDom.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
