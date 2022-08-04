import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'jquery'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './assets/css/font-awesome.min.css'

import './assets/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
