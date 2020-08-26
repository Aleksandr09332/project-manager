import React from 'react';
import { LangEnums, LangActionTypes, StepEnums } from '../../store/system/types';
import { ITasksState, TaskLevelEnum, TasksActionTypes, ITask } from '../../store/tasks/types';

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
  return (
    <li>
      <p>id: {props.id}</p>
      <p>dayFinish: {props.dayFinish}</p>
      <p>dayStart: {props.dayStart}</p>
      <p>level: {props.level}</p>
      <p>type: {props.type}</p>
    </li>
  );
};

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

  {Object.keys(tasks).map((value: string) => {
    console.log(tasks[parseInt(value)])
  })}

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
          <button type="button" onClick={() => onAddTask(TaskLevelEnum.Low, 'test')}>Создать таск</button>
          <ul>
            {Object.keys(tasks).map((value: string) => {
              return Task(tasks[parseInt(value)]);
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
