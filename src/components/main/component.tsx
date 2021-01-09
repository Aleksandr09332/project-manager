import React from 'react';
import { LangActionTypes, StepEnums } from '../../store/system/types';
import { TAddTaskFunc } from '../../store/tasks/types';
import { ModeGame } from '../../store/global/types';
import Board from '../board/container';

export interface propsType {
  day: number;
  step: StepEnums;
  mode: ModeGame;
  onAddTask: TAddTaskFunc;
  onToggleStep: () => LangActionTypes;
}

export function CMain(props: propsType) {
  const {
    day,
    step,
    mode,
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
        <button type="button" onClick={() => onAddTask(mode)}>Создать таск</button>
      </div>
    </div>
  );
}
