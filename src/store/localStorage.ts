import { TState, initState } from './types';

const key = 'initState';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return {};
    }
    return Object.assign(JSON.parse(serializedState), initState);
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const saveState = (state: TState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error(err);
  }
};
