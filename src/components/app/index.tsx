import React from 'react';
import { hot } from 'react-hot-loader';
import Main from '../main/container';

import 'rsuite/dist/styles/rsuite-default.css';
import './style.scss';

const App = function createApp() {
  return <Main />;
};

export default hot(module)(App);
