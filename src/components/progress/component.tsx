import React from 'react';
import { TProgress } from '../../store/tasks/types';
import './style.scss';

const getCurrentProgress = (current: number, total: number) => {
  const done = (key: string) => <div className="progress-done" key={key} />;
  const notDone = (key: string) => <div className="progress-done progress-done--not" key={key} />;
  const notDoneCount = total - current;
  const result = [];

  if (current > 0) {
    for (let i = 0; i < current; i++) {
      result.push(done(`done ${i}`));
    }
  }

  if (notDoneCount > 0) {
    for (let i = 0; i < notDoneCount; i++) {
      result.push(notDone(`not done ${i}`));
    }
  }

  return result;
};

export const Progress = ({ data }: { data: TProgress}) => (
  <div className="progress">
    {data.map((item) => (
      <div className="progress__item" key={item.name}>
        <div className="progress__name">
          {item.name}
        </div>
        <div className="progress__list">
          {getCurrentProgress(item.current, item.total)}
        </div>
      </div>
    ))}
  </div>
);
