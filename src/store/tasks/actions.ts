import {
  ADD_TASK,
  TaskLevelEnum,
  TasksActionTypes,
} from './types';

export const addTask = (level: TaskLevelEnum):TasksActionTypes => ({
  type: ADD_TASK,
  level,
});
