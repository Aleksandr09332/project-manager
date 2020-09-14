import { combineReducers } from 'redux';
import system from './system/reducer';
import tasks from './tasks/reducer';
import modal from './modal/reducer';

export default combineReducers({
  system,
  tasks,
  modal,
});
