import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { loadState, saveState } from './store/localStorage';
import App from './components/app/index';

import reducer from './store';

const win:any = window;
const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState,
  win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  saveState(store.getState());
});

const Application = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(Application, document.getElementById('root'));
