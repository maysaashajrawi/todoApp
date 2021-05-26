import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// for create global store 
import {createStore,applyMiddleware} from 'redux';
// for use all reducers 
import allReducers from "./reducers/index"

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';




// const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(allReducers, applyMiddleware(thunk))

ReactDOM.render(
  // add provider to enable whole app to access the store 

  <Provider store= {store}>
      <App />
  </Provider>
  
  ,
  document.getElementById('root')
);

