import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ReducerProvider} from "./Reducer-context";
import {BrowserRouter as Router} from "react-router-dom"
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ReducerProvider>
    <App />
    </ReducerProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
