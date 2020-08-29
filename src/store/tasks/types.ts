export const ADD_TASK = 'ADD_TASK';

export type ITasksState = Array<ITask>;

export interface ITask {
  id: number;
  name: string;
  type: string;
  dayStart: number;
  dayFinish: number;
  level: TaskLevelEnum;
}

export enum TaskLevelEnum {
  Low = 'low',
  Middle = 'middle',
  High = 'high',
}

interface IAddTask {
  type: typeof ADD_TASK;
  level: TaskLevelEnum;
  typeTask: string;
}

export type TasksActionTypes = IAddTask;
