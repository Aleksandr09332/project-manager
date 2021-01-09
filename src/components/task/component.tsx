import React from 'react';
import { IconButton, Icon } from 'rsuite';
import { TTask } from '../../store/tasks/types';
import { Progress } from '../progress/component';
import './style.scss';

type TTaskProps = {
  freePlace: boolean;
  moveTask: () => void;
} & TTask;

export const Task = ({
  dayFinish, dayStart, column, name, progress, freePlace, moveTask,
}: TTaskProps) => (
  <div className="task" key={name}>
    <div className="task__header">
      <div className="task__title">
        {name}
      </div>
      <div className="task__next">
        {freePlace && (
          <IconButton
            icon={<Icon icon="arrow-right" />}
            onClick={moveTask}
            appearance="primary"
          />
        )}
      </div>
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
