import React from 'react';
import { ITask } from '../store/tasks/types';

export default function Task(props: ITask) {
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
