import React from 'react';
import { hot } from 'react-hot-loader';
import Main from '../main/container';
import './style.scss';

const App = function createApp() {
  return (
    <div>
      <Main />
    </div>
  );
};

export default hot(module)(App);
