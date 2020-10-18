import React from 'react';
import { LangActionTypes, StepEnums } from '../../store/system/types';
import {
  TaskLevelEnum,
  TasksActionTypes,
} from '../../store/tasks/types';
import Board from '../board/container';

export interface propsType {
  day: number;
  step: StepEnums;
  onAddTask: (level: TaskLevelEnum) => TasksActionTypes;
  onToggleStep: () => LangActionTypes;
}

export function CMain(props: propsType) {
  const {
    day,
    step,
    onAddTask,
    onToggleStep,
  } = props;

  return (
    <div className="main-container">
      <div>
        <button type="button" onClick={() => onToggleStep()}>Далее</button>
        <p>{step}</p>
        <strong>{day}</strong>
      </div>
      <Board />
      <div>
        <button type="button" onClick={() => onAddTask(TaskLevelEnum.Low)}>Создать таск</button>
      </div>
    </div>
  );
}
