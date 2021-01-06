import {
  ADD_WORKER,
  REMOVE_WORKER,
  ASSIGN_TASK_TO_WORKER,
  UPDATE_COMPLETED_WORK,
  WorkerActionTypes,
  TWorkerState,
  TWorker,
} from './types';
import {
  CREATE_NEW_GAME, EDepartment, ModeGame,
} from '../global/types';

const configWorker = {
  [ModeGame.Normal]: [
    {
      id: 0,
      name: '',
      completedWork: 0,
      taskId: null,
      department: EDepartment.Analysis,
    },
    {
      id: 1,
      name: '',
      completedWork: 0,
      taskId: null,
      department: EDepartment.Analysis,
    },
    {
      id: 2,
      name: '',
      completedWork: 0,
      taskId: null,
      department: EDepartment.Development,
    },
    {
      id: 3,
      name: '',
      completedWork: 0,
      taskId: null,
      department: EDepartment.Development,
    },
    {
      id: 4,
      name: '',
      completedWork: 0,
      taskId: null,
      department: EDepartment.Development,
    },
    {
      id: 5,
      name: '',
      completedWork: 0,
      taskId: null,
      department: EDepartment.Testing,
    },
    {
      id: 6,
      name: '',
      completedWork: 0,
      taskId: null,
      department: EDepartment.Testing,
    },
  ],
  // Тут можно будет добавить новые режимы игр
  [ModeGame.Hard]: [],
};

const initState: TWorkerState = [];

const generateWorker = (id: number, department: EDepartment):TWorker => {
  return {
    name: '',
    completedWork: 0,
    taskId: null,
    department,
    id,
  };
};

export default function (state: TWorkerState = initState, action: WorkerActionTypes):TWorkerState {
  switch (action.type) {
    case ADD_WORKER:
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
      return configWorker[action.mode];
    default:
      return state;
  }
}
