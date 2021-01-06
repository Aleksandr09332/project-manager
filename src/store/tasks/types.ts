import { TCreateNewGame, BoardNameTypes } from '../global/types';

export const ADD_TASK = 'ADD_TASK';

export type ITasksState = Array<ITask>;

export interface ITask {
  id: number;
  name: string;
  column: BoardNameTypes|null;
  dayStart: number;
  dayFinish: number;
  level: TaskLevelEnum;
}

export enum TaskLevelEnum {
  Low = 'low',
  Middle = 'middle',
  High = 'high',
}

interface IAddTask {
  type: typeof ADD_TASK;
  level: TaskLevelEnum;
}

export type TasksActionTypes = IAddTask|TCreateNewGame;
