import React from 'react';
import { Link } from 'react-router-dom';
import { LangActionTypes, StepEnums } from '../../store/system/types';
import {
  ITask,
  ITasksState,
  TaskLevelEnum,
  TasksActionTypes,
} from '../../store/tasks/types';
import Task from '../task';

export interface propsType {
  day: number;
  step: StepEnums;
  tasks: ITasksState;
  onAddTask: (level: TaskLevelEnum, typeTask: string) => TasksActionTypes;
  onToggleStep: () => LangActionTypes;
}

export function CMain(props: propsType) {
  const {
    day,
    step,
    tasks,
    onAddTask,
    onToggleStep,
  } = props;

  return (
    <div>
      <div>
        <button type="button" onClick={() => onToggleStep()}>Далее</button>
        <p>{step}</p>
        <strong>{day}</strong>
      </div>
      <div>
        <Link to="/settings">Настройки</Link>
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
  );
}
