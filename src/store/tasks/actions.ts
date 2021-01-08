import {
  ADD_TASK,
  TasksActionTypes,
} from './types';
import { ModeGame } from '../global/types';

export const addTask = (mode: ModeGame):TasksActionTypes => ({
  type: ADD_TASK,
  mode,
});
