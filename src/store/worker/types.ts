import { EDepartment, TCreateNewGame } from '../global/types';

export const ADD_WORKER = 'ADD_WORKER';
export const REMOVE_WORKER = 'REMOVE_WORKER';
export const ASSIGN_TASK_TO_WORKER = 'ASSIGN_TASK_TO_WORKER';
export const UPDATE_COMPLETED_WORK = 'UPDATE_COMPLETED_WORK';

export type TWorker = {
  id: number;
  name: string;
  completedWork: number;
  department: EDepartment;
  taskId: number|null;
}

export type TAddWorker = {
  type: typeof ADD_WORKER;
  department: EDepartment;
}

export type TRemoveWorker = {
  type: typeof REMOVE_WORKER;
  id: number;
}

export type TAssignTaskToWorker = {
  type: typeof ASSIGN_TASK_TO_WORKER;
  workerId: number;
  taskId: number;
}

export type TUpdateCompletedWork = {
  type: typeof UPDATE_COMPLETED_WORK;
  workerId: number;
  completedWork: number;
}

export type TWorkerState = Array<TWorker>;

export type WorkerActionTypes = TAddWorker
  |TAssignTaskToWorker
  |TRemoveWorker
  |TCreateNewGame
  |TUpdateCompletedWork;
