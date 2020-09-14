import { ISystemState } from './system/types';
import { ITasksState } from './tasks/types';
import { IModaleState, NameModal } from './modal/types';

interface IState {
  system: ISystemState;
  tasks: ITasksState;
  modal: IModaleState;
}

export const initState = {
  modal: {
    name: NameModal.Menu,
  },
};

export type stateType = IState;
