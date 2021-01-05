import React, { useState } from 'react';
import {
  InputNumber, InputGroup, ButtonGroup, IconButton, Icon,
} from 'rsuite';
import { useSize } from '@umijs/hooks';
import './style.scss';

import {
  BoardActionTypes,
  IBoardState,
  IColumn,
} from '../../store/board/types';
import { ITask, ITasksState } from '../../store/tasks/types';
import { StepEnums } from '../../store/system/types';
import { BoardColumnsSystem, BoardNameTypes } from '../../store/global/types';
import Task from '../task';

type TUpdateMaxCountTasks = (name: BoardNameTypes, count: number) => BoardActionTypes;

type TUpdateLimit = {
  maxCountTask: number;
  isDisabled:boolean;
  onUpdateMaxCountTasks: TUpdateMaxCountTasks;
  name: BoardNameTypes;
}

export type BoardPropsType = {
  step: StepEnums;
  tasks: ITasksState;
  columns: IBoardState;
  onUpdateMaxCountTasks: TUpdateMaxCountTasks;
}

function getTasks(tasks: Array<ITask>, boardColumn: BoardNameTypes) {
  return tasks.map((task: ITask) => {
    const { column } = task;

    if (boardColumn === column) {
      return Task(task);
    }

    return null;
  });
}

function minusHandler({
  maxCountTask,
  isDisabled,
  onUpdateMaxCountTasks,
  name,
} :TUpdateLimit): void {
  if (maxCountTask <= 1 || isDisabled) {
    return;
  }
  onUpdateMaxCountTasks(name, maxCountTask - 1);
}

function plusHandler({
  maxCountTask,
  isDisabled,
  onUpdateMaxCountTasks,
  name,
} :TUpdateLimit): void {
  if (maxCountTask >= 99 || isDisabled) {
    return;
  }
  onUpdateMaxCountTasks(name, maxCountTask + 1);
}

export function CBoard({
  step,
  tasks,
  columns,
  onUpdateMaxCountTasks,
}: BoardPropsType) {
  const widthColumn = 200;
  const [box, ref] = useSize<HTMLDivElement>();
  const [position, setPosition] = useState(0);
  const isDisabled = step !== StepEnums.Start;
  const maxPosition = columns.length - 2;
  const widthBoard = box.width || 0;
  let sumWidth = 0;
  let lastPosition = position;

  for (let i = position; i <= maxPosition; i += 1) {
    const { isDone } = columns[i];
    const k = isDone ? 2 : 1;

    sumWidth += k * widthColumn;

    if (sumWidth > widthBoard) {
      break;
    }

    lastPosition = i;
  }

  const scrollHorizontal = (stepScroll: number) => {
    setPosition(position + stepScroll);
  };

  return (
    <div className="board" ref={ref}>
      {position === 0 && lastPosition === maxPosition ? null : (
        <ButtonGroup className="board-controllers">
          <IconButton
            icon={<Icon icon="arrow-left" />}
            onClick={() => scrollHorizontal(-1)}
            appearance="primary"
            disabled={position === 0}
          />
          <IconButton
            icon={<Icon icon="arrow-right" />}
            onClick={() => scrollHorizontal(1)}
            appearance="primary"
            disabled={lastPosition === maxPosition}
          />
        </ButtonGroup>
      )}
      <div className="board-columns">
        {columns.map(({ name, maxCountTask, isDone }: IColumn, index: number) => {
          if (name === BoardColumnsSystem.Closed) {
            return null;
          }

          if (index < position || index > lastPosition) {
            return null;
          }

          return (
            <div className={['board-column', isDone ? 'board-column--2subcolumn' : ''].join(' ')} key={name}>
              <div className="board-row">
                <h4 className="board-name">{name}</h4>
                <table className="board-table">
                  <tbody>
                    <tr>
                      <td className="board-table__title">
                        Лимит
                      </td>
                      <td>
                        <InputGroup className="board-limit">
                          <InputGroup.Button
                            size="sm"
                            onClick={() => minusHandler({
                              maxCountTask,
                              isDisabled,
                              onUpdateMaxCountTasks,
                              name,
                            })}
                            disabled={isDisabled}
                          >
                            -
                          </InputGroup.Button>
                          <InputNumber
                            size="sm"
                            className="custom-input-number"
                            value={maxCountTask}
                          />
                          <InputGroup.Button
                            size="sm"
                            onClick={() => plusHandler({
                              maxCountTask,
                              isDisabled,
                              onUpdateMaxCountTasks,
                              name,
                            })}
                            disabled={isDisabled}
                          >
                            +
                          </InputGroup.Button>
                        </InputGroup>
                      </td>
                    </tr>
                    <tr>
                      <td className="board-table__title">Рабочий</td>
                      <td> </td>
                    </tr>
                  </tbody>
                </table>
                {isDone ? (
                  <div className="board-status board-status--border">
                    <div className="board-status__item">В работе</div>
                    <div className="board-status__item">Готово</div>
                  </div>
                ) : <div className="board-status-null" />}
              </div>
              {isDone ? (
                <div className="board-status">
                  <div className="board-status__item">{getTasks(tasks, name)}</div>
                  <div className="board-status__item">test</div>
                </div>
              ) : <div className="board-row board-row--padding">{getTasks(tasks, name)}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
