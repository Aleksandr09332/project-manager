import React from 'react';
import { TTask } from '../../store/tasks/types';
import { Progress } from '../progress/component';
import './style.scss';

export const Task = ({
  dayFinish, dayStart, column, name, progress,
}: TTask) => (
  <div className="task" key={name}>
    <div className="task__header">
      {name}
    </div>
    <p>{`column: ${column}`}</p>
    <Progress data={progress} />
    <div className="task-timing">
      <div className="task-timing__item">
        {dayStart || null}
      </div>
      <div className="task-timing__item">
        {dayFinish || null}
      </div>
      <div className="task-timing__item">
        {dayFinish ? dayFinish - dayStart : null}
      </div>
    </div>
  </div>
);
