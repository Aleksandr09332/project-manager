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

if (process.env.NODE_ENV === 'development') {
  const link = document.getElementById('style');

  if (link) {
    document.head.removeChild(link);
  }
}
ReactDOM.render(Application, document.getElementById('root'));
