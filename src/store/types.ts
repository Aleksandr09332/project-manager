import { ISystemState } from './system/types';
import { ITasksState } from './tasks/types';
import { IBoardState } from './board/types';
import { INavState, NameModal } from './navigation/types';

interface IState {
  system: ISystemState;
  tasks: ITasksState;
  board: IBoardState;
  navigation: INavState;
}

export const initState = {
  navigation: {
    modal: NameModal.Menu,
  },
};

export type stateType = IState;
