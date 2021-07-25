import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ReducerProvider} from "./Reducer-context";
ReactDOM.render(
  <React.StrictMode>
    <ReducerProvider>
    <App />
    </ReducerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
