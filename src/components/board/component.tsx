import React from 'react';
import { InputNumber, InputGroup } from 'rsuite';
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

export function CBoard(props: BoardPropsType) {
  const {
    step,
    tasks,
    columns,
    onUpdateMaxCountTasks,
  } = props;
  const isDisabled = step !== StepEnums.Start;

  return (
    <div className="board">
      {columns.map(({ name, maxCountTask, colspan }: IColumn) => {
        if (name === BoardColumnsSystem.Closed) {
          return null;
        }

        const isSubColumn = colspan === 6;

        return (
          <div className={['board-column', isSubColumn ? 'board-column--2subcolumn' : ''].join(' ')} key={name}>
            <div className="board-row">
              <h4 className="board-name">{name}</h4>
              <table className="board-table">
                <tbody>
                  <tr>
                    <td className="board-table__title">
                      Лимит
                    </td>
                    <td>
                      <InputGroup>
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
              {colspan === 6 ? (
                <div className="board-status board-status--border">
                  <div className="board-status__item">В работе</div>
                  <div className="board-status__item">Готово</div>
                </div>
              ) : <div className="board-status-null" />}
            </div>
            {colspan === 6 ? (
              <div className="board-status">
                <div className="board-status__item">{getTasks(tasks, name)}</div>
                <div className="board-status__item">Готово</div>
              </div>
            ) : <div className="board-row board-row--padding">{getTasks(tasks, name)}</div>}
          </div>
        );
      })}
    </div>
  );
}
