import { stateType } from './types';

const key = 'initState';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const saveState = (state: stateType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error(err);
  }
};
