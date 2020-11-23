import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import configureStore from 'data/configureStore';
import { BrowserRouter } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
   <React.StrictMode>
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
