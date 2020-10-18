import {
  UPDATE_MAX_COUNT_TASKS_IN_COLUMN,
  BoardActionTypes,
  BoardNameTypes,
} from './types';

export const updateMaxCountTasks = (name: BoardNameTypes, count:number):BoardActionTypes => ({
  type: UPDATE_MAX_COUNT_TASKS_IN_COLUMN,
  name,
  count,
});
