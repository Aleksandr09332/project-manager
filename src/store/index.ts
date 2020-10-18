import { combineReducers } from 'redux';
import system from './system/reducer';
import tasks from './tasks/reducer';
import board from './board/reducer';
import navigation from './navigation/reducer';

export default combineReducers({
  system,
  tasks,
  board,
  navigation,
});
