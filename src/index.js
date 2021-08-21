import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} > */}
    <App />
    {/* </PersistGate> */}
  </Provider>,

  document.getElementById('root'),
);
