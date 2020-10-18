import {
  ADD_TASK,
  ITask,
  ITasksState,
  TaskLevelEnum,
  TasksActionTypes,
} from './types';
import { CREATE_NEW_GAME, BoardColumnsSystem } from '../global/types';

const generationTask = (id: number, level: TaskLevelEnum):ITask => ({
  id,
  level,
  column: BoardColumnsSystem.Ready,
  name: `#${level}${id + 1}`,
  dayStart: 0,
  dayFinish: 0,
});

const initState: ITasksState = [];

export default function (state: ITasksState = initState, action: TasksActionTypes):ITasksState {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        generationTask(state.length, action.level),
      ];
    case CREATE_NEW_GAME:
      return initState;
    default:
      return state;
  }
}
