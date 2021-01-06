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
  womanFirstName,
  womanSecondName,
  manFirstName,
  manSecondName,
} from '../../conf/workerName';
import {
  CREATE_NEW_GAME, EDepartment, ModeGame,
} from '../global/types';

const initState: TWorkerState = [];
const getRandom = (n: number) => Math.floor(Math.random() * n);

const generateWorker = (id: number, department: EDepartment):TWorker => {
  let firstName: string;
  let secondName: string;
  const isWoman = getRandom(2) === 0;

  if (isWoman) {
    const first = getRandom(womanFirstName.length);
    const second = getRandom(womanSecondName.length);
    firstName = womanFirstName[first];
    secondName = womanSecondName[second];
  } else {
    const first = getRandom(manFirstName.length);
    const second = getRandom(manSecondName.length);
    firstName = manFirstName[first];
    secondName = manSecondName[second];
  }

  return {
    name: `${firstName} ${secondName}`,
    completedWork: 0,
    taskId: null,
    department,
    isWoman,
    id,
  };
};

export default function (state: TWorkerState = initState, action: WorkerActionTypes):TWorkerState {
  switch (action.type) {
    case CREATE_NEW_GAME:
      if (action.mode === ModeGame.Normal) {
        return [
          generateWorker(0, EDepartment.Analysis),
          generateWorker(1, EDepartment.Analysis),
          generateWorker(2, EDepartment.Development),
          generateWorker(3, EDepartment.Development),
          generateWorker(4, EDepartment.Development),
          generateWorker(5, EDepartment.Testing),
          generateWorker(6, EDepartment.Testing),
        ];
      }
      return [];

    case ADD_WORKER:
      return [
        ...state,
        generateWorker(state.length, action.department),
      ];
    case REMOVE_WORKER:
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1),
      ];
    case ASSIGN_TASK_TO_WORKER:
      return state.map((item) => {
        if (item.id !== action.workerId) {
          return item;
        }
        return {
          ...item,
          taskId: action.taskId,
        };
      });
    case UPDATE_COMPLETED_WORK:
      return state.map((item) => {
        if (item.id !== action.workerId) {
          return item;
        }
        return {
          ...item,
          completedWork: action.completedWork,
        };
      });
    default:
      return state;
  }
}
