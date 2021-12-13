import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from "redux";
import formReducer from "./state_session/reducers";
import thunk from "redux-thunk"
import {BrowserRouter as Router} from "react-router-dom";



const store = createStore(formReducer,applyMiddleware(thunk));
store.subscribe(()=>{
  console.log('inside store',store.getState())
})
ReactDOM.render(
  <React.StrictMode>
    <Provider key="app" store={store}>
    <Router>
    <App />
    </Router>
  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
