import {
  ADD_TASK,
  TTask,
  TTasksState,
  TTaskLevel,
  ArrayTaskLevel,
  TasksActionTypes,
  TProgress,
} from './types';
import {
  CREATE_NEW_GAME, BoardColumnsSystemEnum, DepartmentEnum, ModeGame,
} from '../global/types';

const listProgress = {
  [ModeGame.Normal]: [
    DepartmentEnum.Analysis,
    DepartmentEnum.Development,
    DepartmentEnum.Testing,
  ],
  [ModeGame.Hard]: [],
};
const getRandom = (min: number, max: number) => (
  Math.floor(Math.random() * (max - min) + min)
);
const generationTask = (id: number, mode: ModeGame):TTask => {
  let level:TTaskLevel = ArrayTaskLevel[0];
  const max = 20;
  const min = 5;
  const departments: Array<DepartmentEnum> = listProgress[mode];
  const progress: TProgress = departments.map((name) => ({
    current: 0,
    total: getRandom(min, max),
    workers: [],
    name,
  }));

  // Приведем с помощью пропорции среднее значение прогресса в уровень сложности
  if (progress.length) {
    const average = Math.floor(progress.reduce(
      (prev, value) => value.total + prev, 0,
    ) / progress.length);
    const index = Math.floor((ArrayTaskLevel.length * (average - min)) / (max - min));

    level = ArrayTaskLevel[index];
  }

  return {
    id,
    level,
    column: BoardColumnsSystemEnum.Ready,
    name: `#${level}${id + 1}`,
    dayStart: 0,
    dayFinish: 0,
    progress,
  };
};

const initState: TTasksState = [];

export default function (state: TTasksState = initState, action: TasksActionTypes):TTasksState {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        generationTask(state.length, action.mode),
      ];
    case CREATE_NEW_GAME:
      return initState;
    default:
      return state;
  }
}
