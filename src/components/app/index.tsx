import React from 'react';
import { hot } from 'react-hot-loader';
import Router from '../router/container';

import 'rsuite/dist/styles/rsuite-default.css';
import './style.scss';

const App = function createApp() {
  return <Router />;
};

export default hot(module)(App);
