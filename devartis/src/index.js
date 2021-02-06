import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, } from 'react-redux';
import store from './store/index';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
    {/* <React.StrictMode> */}
    {/* <App /> */}
    {/* </React.StrictMode>, */}
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();

