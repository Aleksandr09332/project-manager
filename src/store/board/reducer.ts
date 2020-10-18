import {
  UPDATE_MAX_COUNT_TASKS_IN_COLUMN,
  IBoardState,
  BoardActionTypes,
} from './types';
import {
  CREATE_NEW_GAME,
  BoardColumnsDepartment,
  BoardColumnsSystem,
  ModeGame,
} from '../global/types';

const configBoard = {
  [ModeGame.Normal]: [
    {
      id: 0,
      name: BoardColumnsSystem.Ready,
      maxCountTask: 2,
      colspan: 3,
    },
    {
      id: 1,
      name: BoardColumnsDepartment.Analysis,
      maxCountTask: 2,
      colspan: 6,
    },
    {
      id: 2,
      name: BoardColumnsDepartment.Development,
      maxCountTask: 3,
      colspan: 6,
    },
    {
      id: 3,
      name: BoardColumnsDepartment.Testing,
      maxCountTask: 2,
      colspan: 6,
    },
    {
      id: 4,
      name: BoardColumnsSystem.Deployed,
      maxCountTask: 0,
      colspan: 3,
    },
    {
      id: 5,
      name: BoardColumnsSystem.Closed,
      maxCountTask: 0,
      colspan: 0,
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
