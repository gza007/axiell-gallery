import 'raf/polyfill';
import React from 'react';
import App from './Components/app';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

render(
  (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root')
);