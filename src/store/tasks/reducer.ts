import {
  ADD_TASK,
  ITask,
  ITasksState,
  TaskLevelEnum,
  TasksActionTypes,
} from './types';

const generationTask = (id: number, level: TaskLevelEnum, type: string):ITask => ({
  id,
  level,
  type,
  name: `#${type}${id + 1}`,
  dayStart: 0,
  dayFinish: 0,
});

export default function (state: ITasksState = [], action: TasksActionTypes):ITasksState {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        generationTask(state.length, action.level, action.typeTask),
      ];
    default:
      return state;
  }
}
