import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/app/index';

import reducer from './reducers/index';

const win:any = window;
const store = createStore(
  reducer,
  win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Application = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(Application, document.getElementById('root'));
