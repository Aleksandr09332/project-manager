import { combineReducers } from 'redux';
import system from './system/reducer';
import tasks from './tasks/reducer';
import navigation from './navigation/reducer';

export default combineReducers({
  system,
  tasks,
  navigation,
});
