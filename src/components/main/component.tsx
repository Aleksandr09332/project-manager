import React from 'react';
import { LangEnums, LangActionTypes, StepEnums } from '../../store/system/types';
import {
  ITask,
  ITasksState,
  TaskLevelEnum,
  TasksActionTypes,
} from '../../store/tasks/types';
import Task from '../task';

export interface propsType {
  langCode: LangEnums;
  day: number;
  step: StepEnums;
  tasks: ITasksState;
  onAddTask: (level: TaskLevelEnum, typeTask: string) => TasksActionTypes;
  onToggleLang: (lang: LangEnums) => LangActionTypes;
  onToggleStep: () => LangActionTypes;
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
            {tasks.map((value: ITask) => {
              const {
                id,
                dayFinish,
                dayStart,
                level,
                type,
                name,
              } = value;

              return (
                <Task
                  key={name}
                  id={id}
                  name={name}
                  dayFinish={dayFinish}
                  dayStart={dayStart}
                  level={level}
                  type={type}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
