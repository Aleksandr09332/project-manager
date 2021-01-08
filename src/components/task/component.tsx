import React from 'react';
import { Panel } from 'rsuite';
import { TTask } from '../../store/tasks/types';
import { Progress } from '../progress/component';

export const Task = (props: TTask) => {
  const {
    id,
    dayFinish,
    dayStart,
    level,
    column,
    name,
    progress,
  } = props;

  return (
    <Panel shaded header={name} key={name} style={{ marginBottom: 10 }}>
      <p>{`id: ${id}`}</p>
      <p>{`dayFinish: ${dayFinish}`}</p>
      <p>{`dayStart: ${dayStart}`}</p>
      <p>{`level: ${level}`}</p>
      <p>{`column: ${column}`}</p>
      <Progress data={progress} />
    </Panel>
  );
};
