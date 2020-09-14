import {
  ADD_TASK,
  ITask,
  ITasksState,
  TaskLevelEnum,
  TasksActionTypes,
} from './types';
import { CREATE_NEW_GAME } from '../global/types';

const generationTask = (id: number, level: TaskLevelEnum, type: string):ITask => ({
  id,
  level,
  type,
  name: `#${type}${id + 1}`,
  dayStart: 0,
  dayFinish: 0,
});

const initState: ITasksState = [];

export default function (state: ITasksState = initState, action: TasksActionTypes):ITasksState {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        generationTask(state.length, action.level, action.typeTask),
      ];
    case CREATE_NEW_GAME:
      return initState;
    default:
      return state;
  }
}
