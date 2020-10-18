import {
  ICreateNewGame,
  BoardColumnsDepartment,
  BoardColumnsSystem,
} from '../global/types';

export const UPDATE_MAX_COUNT_TASKS_IN_COLUMN = 'UPDATE_MAX_COUNT_TASKS_IN_COLUMN';

export type BoardNameTypes = BoardColumnsDepartment|BoardColumnsSystem;

export interface IColumn {
  name: BoardNameTypes;
  maxCountTask: number;
  colspan: number;
}

export type IBoardState = Array<IColumn>;

interface IUpdateMaxCount {
  type: typeof UPDATE_MAX_COUNT_TASKS_IN_COLUMN;
  name: BoardNameTypes;
  count: number;
}

export type BoardActionTypes = IUpdateMaxCount|ICreateNewGame;
