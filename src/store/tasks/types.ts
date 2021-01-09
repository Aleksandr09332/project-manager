import {
  TCreateNewGame, BoardNameTypes, DepartmentEnum, ModeGame,
} from '../global/types';

export const ADD_TASK = 'ADD_TASK';
export const MOVE_TASK = 'MOVE_TASK';

export type TTaskLevel = 'low'|'middle'|'high';
export const ArrayTaskLevel: Array<TTaskLevel> = ['low', 'middle', 'high'];

type TProgressProp = {
  name: DepartmentEnum,
  current: number;
  total: number;
  workers: Array<number>;
}

export type TProgress = Array<TProgressProp>;

export type TTask = {
  id: number;
  name: string;
  column?: BoardNameTypes;
  dayStart: number;
  dayFinish: number;
  level: TTaskLevel;
  progress: TProgress;
}

export type TTasksState = Array<TTask>;

type TAddTask = {
  type: typeof ADD_TASK;
  mode: ModeGame;
}

type TMoveTask = {
  type: typeof MOVE_TASK;
  column: BoardNameTypes;
  id: number;
}

export type TasksActionTypes = TCreateNewGame|TAddTask|TMoveTask;
export type TAddTaskFunc = (mode: ModeGame) => TasksActionTypes;
export type TMoveTaskFunc = (column: BoardNameTypes, id: number) => TasksActionTypes;
