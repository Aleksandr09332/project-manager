import {
  UPDATE_MAX_COUNT_TASKS_IN_COLUMN,
  IBoardState,
  BoardActionTypes,
} from './types';
import {
  CREATE_NEW_GAME,
  DepartmentEnum,
  BoardColumnsSystemEnum,
  ModeGame,
} from '../global/types';

const configBoard = {
  [ModeGame.Normal]: [
    {
      id: 0,
      name: BoardColumnsSystemEnum.Ready,
      maxCountTask: 2,
      isDone: false,
    },
    {
      id: 1,
      name: DepartmentEnum.Analysis,
      maxCountTask: 2,
      isDone: true,
    },
    {
      id: 2,
      name: DepartmentEnum.Development,
      maxCountTask: 3,
      isDone: true,
    },
    {
      id: 3,
      name: DepartmentEnum.Testing,
      maxCountTask: 2,
      isDone: true,
    },
    {
      id: 4,
      name: BoardColumnsSystemEnum.Deployed,
      maxCountTask: 0,
      isDone: false,
    },
    {
      id: 5,
      name: BoardColumnsSystemEnum.Closed,
      maxCountTask: 0,
      isDone: false,
    },
  ],
  // Тут можно будет добавить новые режимы игр
  [ModeGame.Hard]: [],
};

const initState: IBoardState = configBoard[ModeGame.Normal];

export default function (state: IBoardState = initState, action: BoardActionTypes):IBoardState {
  switch (action.type) {
    case UPDATE_MAX_COUNT_TASKS_IN_COLUMN:
      return state.map((item) => {
        if (action.name !== item.name) {
          return item;
        }
        return {
          ...item,
          maxCountTask: action.count,
        };
      });
    case CREATE_NEW_GAME:
      return configBoard[action.mode];
    default:
      return state;
  }
}
