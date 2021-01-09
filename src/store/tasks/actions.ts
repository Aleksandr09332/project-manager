import {
  ADD_TASK,
  MOVE_TASK,
  TAddTaskFunc,
  TMoveTaskFunc,
} from './types';

export const addTask: TAddTaskFunc = (mode) => ({
  type: ADD_TASK,
  mode,
});

export const moveTask: TMoveTaskFunc = (column, id) => ({
  type: MOVE_TASK,
  column,
  id,
});
