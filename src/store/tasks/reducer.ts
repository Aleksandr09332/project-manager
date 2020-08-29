import {
  ADD_TASK,
  ITask,
  ITasksState,
  TaskLevelEnum,
  TasksActionTypes,
} from './types';

let index = 0;

const generationTask = (id: string, level: TaskLevelEnum, type: string):ITask => ({
  id,
  level,
  type,
  dayStart: 0,
  dayFinish: 0,
});

export default function (state: ITasksState = {}, action: TasksActionTypes):ITasksState {
  switch (action.type) {
    case ADD_TASK:
      index += 1;
      return {
        ...state,
        [`${action.typeTask}${index}`]: generationTask(`${action.typeTask}${index}`, action.level, action.typeTask),
      };
    default:
      return state;
  }
}
