import { ISystemState } from './system/types';
import { TTasksState } from './tasks/types';
import { IBoardState } from './board/types';
import { TWorkerState } from './worker/types';
import { INavState, NameModal } from './navigation/types';

export const initState = {
  navigation: {
    modal: NameModal.Menu,
  },
};

export type TState = {
  system: ISystemState;
  tasks: TTasksState;
  workers: TWorkerState;
  board: IBoardState;
  navigation: INavState;
};
