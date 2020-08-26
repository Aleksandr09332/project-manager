import { ISystemState } from './system/types';
import { ITasksState } from './tasks/types';

interface IState {
  system: ISystemState;
  tasks: ITasksState;
}

export type stateType = IState;
