import {
  ADD_WORKER,
  REMOVE_WORKER,
  ASSIGN_TASK_TO_WORKER,
  UPDATE_COMPLETED_WORK,
  WorkerActionTypes,
} from './types';
import { DepartmentEnum } from '../global/types';

export const addWorker = (department: DepartmentEnum):WorkerActionTypes => ({
  type: ADD_WORKER,
  department,
});
export const removeWorker = (id: number):WorkerActionTypes => ({
  type: REMOVE_WORKER,
  id,
});
export const assignTaskToWorker = (workerId: number, taskId: number):WorkerActionTypes => ({
  type: ASSIGN_TASK_TO_WORKER,
  workerId,
  taskId,
});
export const updateCompleteWork = (workerId: number, completedWork: number):WorkerActionTypes => ({
  type: UPDATE_COMPLETED_WORK,
  workerId,
  completedWork,
});
