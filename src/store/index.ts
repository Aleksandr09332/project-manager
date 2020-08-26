import { combineReducers } from 'redux';
import system from './system/reducer';
import tasks from './tasks/reducer';

export default combineReducers({
  system,
  tasks,
});
