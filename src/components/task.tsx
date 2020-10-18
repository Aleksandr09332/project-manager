import React from 'react';
import { Panel } from 'rsuite';
import { ITask } from '../store/tasks/types';

export default function Task(props: ITask) {
  const {
    id,
    dayFinish,
    dayStart,
    level,
    column,
    name,
  } = props;

  return (
    <Panel shaded header={name} key={name} style={{ marginBottom: 10 }}>
      <p>{`id: ${id}`}</p>
      <p>{`dayFinish: ${dayFinish}`}</p>
      <p>{`dayStart: ${dayStart}`}</p>
      <p>{`level: ${level}`}</p>
      <p>{`column: ${column}`}</p>
    </Panel>
  );
}
