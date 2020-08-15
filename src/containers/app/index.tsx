import React from 'react';
import { hot } from 'react-hot-loader';
import './style.scss';

const App = function createApp() {
  return (
    <div>
      <h1>
        Привет
      </h1>
    </div>
  );
};

export default hot(module)(App);
