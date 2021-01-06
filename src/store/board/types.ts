import { TCreateNewGame, BoardNameTypes } from '../global/types';

export const UPDATE_MAX_COUNT_TASKS_IN_COLUMN = 'UPDATE_MAX_COUNT_TASKS_IN_COLUMN';

export interface IColumn {
  name: BoardNameTypes;
  maxCountTask: number;
  isDone: boolean;
}

export type IBoardState = Array<IColumn>;

interface IUpdateMaxCount {
  type: typeof UPDATE_MAX_COUNT_TASKS_IN_COLUMN;
  name: BoardNameTypes;
  count: number;
}

export type BoardActionTypes = IUpdateMaxCount|TCreateNewGame;
