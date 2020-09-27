import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { loadState, saveState } from './store/localStorage';
import App from './components/app/index';

import reducer from './store';

const win:any = window;
const persistedState = loadState();
const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk)),
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
