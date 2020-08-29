import React from 'react';
import { LangEnums, LangActionTypes, StepEnums } from '../../store/system/types';
import {
  ITasksState,
  TaskLevelEnum,
  TasksActionTypes,
  ITask,
} from '../../store/tasks/types';

export interface propsType {
  langCode: LangEnums;
  day: number;
  step: StepEnums;
  tasks: ITasksState;
  onAddTask: (level: TaskLevelEnum, typeTask: string) => TasksActionTypes;
  onToggleLang: (lang: LangEnums) => LangActionTypes;
  onToggleStep: () => LangActionTypes;
}

function Task(props: ITask) {
  const {
    id,
    dayFinish,
    dayStart,
    level,
    type,
  } = props;

  return (
    <li>
      <p>{`id: ${id}`}</p>
      <p>{`dayFinish: ${dayFinish}`}</p>
      <p>{`dayStart: ${dayStart}`}</p>
      <p>{`level: ${level}`}</p>
      <p>{`type: ${type}`}</p>
    </li>
  );
}

export function CMain(props: propsType) {
  const {
    day,
    step,
    langCode,
    tasks,
    onAddTask,
    onToggleLang,
    onToggleStep,
  } = props;

  return (
    <div>
      <h1>
        Привет
      </h1>
      <div>
        <div>
          {langCode === 'ru'
            ? <button type="button" onClick={() => onToggleLang(LangEnums.En)}>EN</button>
            : <button type="button" onClick={() => onToggleLang(LangEnums.Ru)}>RU</button> }
        </div>
        <div>
          <button type="button" onClick={() => onToggleStep()}>Далее</button>
          <p>{step}</p>
          <strong>{day}</strong>
        </div>
        <div>
          <button type="button" onClick={() => onAddTask(TaskLevelEnum.Low, 't')}>Создать таск</button>
          <ul>
            {Object.keys(tasks).map((value: string) => Task(tasks[value]))}
          </ul>
        </div>
      </div>
    </div>
  );
}
