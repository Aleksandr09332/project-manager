import {
  ADD_TASK,
  TaskLevelEnum,
  TasksActionTypes,
} from './types';

export const addTask = (level: TaskLevelEnum, typeTask: string):TasksActionTypes => ({
  type: ADD_TASK,
  level,
  typeTask,
});
