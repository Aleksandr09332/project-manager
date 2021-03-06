import React, { useState } from 'react';
import { useSize } from '@umijs/hooks';
import {
  InputNumber, InputGroup, ButtonGroup, IconButton, Icon, Whisper, Tooltip, Avatar,
} from 'rsuite';
import {
  BoardActionTypes, IBoardState, IColumn,
} from '../../store/board/types';
import { TMoveTaskFunc, TTask, TTasksState } from '../../store/tasks/types';
import { BoardColumnsSystemEnum, BoardNameTypes } from '../../store/global/types';
import { TWorker, TWorkerState } from '../../store/worker/types';
import { StepEnums } from '../../store/system/types';
import { Task } from '../task/component';
import './style.scss';

type TUpdateMaxCountTasks = (name: BoardNameTypes, count: number) => BoardActionTypes;

type TGroupTask = {
  [key: string]: TTasksState;
}

type TUpdateLimit = {
  maxCountTask: number;
  isDisabled:boolean;
  onUpdateMaxCountTasks: TUpdateMaxCountTasks;
  name: BoardNameTypes;
}

export type BoardPropsType = {
  step: StepEnums;
  tasks: TTasksState;
  columns: IBoardState;
  workers: TWorkerState;
  onMoveTask: TMoveTaskFunc;
  onUpdateMaxCountTasks: TUpdateMaxCountTasks;
}

function getTasks(
  tasks: TGroupTask,
  currentColumnName: BoardNameTypes,
  onMoveTask: TMoveTaskFunc,
  nextColumn: IColumn,
) {
  return tasks[currentColumnName].map((task: TTask) => {
    const { name, maxCountTask } = nextColumn;
    const freePlace = tasks[name].length < maxCountTask;
    const moveTask = () => onMoveTask(name, task.id);

    return Task({ ...task, freePlace, moveTask });
  });
}

function getGroupTask(tasks: TTasksState, columns: IBoardState):TGroupTask {
  const result:TGroupTask = {};

  for (let i = 0; i < columns.length; i++) {
    result[columns[i].name] = [];
  }

  for (let i = 0; i < tasks.length; i++) {
    const { column } = tasks[i];

    if (column && result[column]) {
      result[column].push(tasks[i]);
    }
  }

  return result;
}

function minusHandler({
  maxCountTask, isDisabled, onUpdateMaxCountTasks, name,
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

const iconMan = './dist/image/man.png';
const iconWoman = './dist/image/woman.png';

export function CBoard({
  step, tasks, columns, onUpdateMaxCountTasks, workers, onMoveTask,
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

  const groupTask = getGroupTask(tasks, columns);

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
          if (name === BoardColumnsSystemEnum.Closed) {
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
                      <td className="board-table__workers board-table__title">Рабочий</td>
                      <td className="board-table__workers board-table__right">
                        {
                          workers
                            .filter((item: TWorker) => item.department === name)
                            .map((item: TWorker) => (
                              <Whisper
                                key={item.name}
                                trigger="hover"
                                placement="topEnd"
                                speaker={(
                                  <Tooltip>
                                    {item.name}
                                  </Tooltip>
                                )}
                              >
                                <Avatar
                                  className="worker"
                                  circle
                                  src={item.isWoman ? iconWoman : iconMan}
                                />
                              </Whisper>
                            ))
                        }
                      </td>
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
                  <div className="board-status__item">
                    {getTasks(groupTask, name, onMoveTask, columns[index + 1])}
                  </div>
                  <div className="board-status__item">test</div>
                </div>
              ) : (
                <div className="board-row board-row--padding">
                  {getTasks(groupTask, name, onMoveTask, columns[index + 1])}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
