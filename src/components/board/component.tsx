import React from 'react';
import { FlexboxGrid, InputNumber, InputGroup } from 'rsuite';

import {
  BoardActionTypes,
  IBoardState,
  IColumn,
  BoardNameTypes,
} from '../../store/board/types';
import { ITask, ITasksState } from '../../store/tasks/types';
import { StepEnums } from '../../store/system/types';
import { BoardColumnsSystem } from '../../store/global/types';
import Task from '../task';

export interface BoardPropsType {
  step: StepEnums;
  tasks: ITasksState;
  columns: IBoardState;
  onUpdateMaxCountTasks: (name: BoardNameTypes, count: number) => BoardActionTypes;
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
    <div className="board-wrapper">
      <FlexboxGrid>
        {columns.map((column: IColumn) => {
          const { name, maxCountTask, colspan } = column;
          if (name === BoardColumnsSystem.Closed) {
            return null;
          }
          const minusHandler = () => {
            if (maxCountTask <= 1 || isDisabled) {
              return;
            }
            onUpdateMaxCountTasks(name, maxCountTask - 1);
          };
          const plusHandler = () => {
            if (maxCountTask >= 99 || isDisabled) {
              return;
            }
            onUpdateMaxCountTasks(name, maxCountTask + 1);
          };

          return (
            <FlexboxGrid.Item colspan={colspan} key={name}>
              <div className="board-column">
                <h4>{name}</h4>
                <table>
                  <tr>
                    <td className="board-table-title">
                      Лимит
                    </td>
                    <td>
                      <InputGroup>
                        <InputGroup.Button onClick={minusHandler} disabled={isDisabled}>-</InputGroup.Button>
                        <InputNumber
                          className="custom-input-number"
                          value={maxCountTask}
                        />
                        <InputGroup.Button onClick={plusHandler} disabled={isDisabled}>+</InputGroup.Button>
                      </InputGroup>
                    </td>
                  </tr>
                  <tr>
                    <td className="board-table-title">Рабочий</td>
                    <td> </td>
                  </tr>
                </table>
              </div>
              <div className="board-column">
                <br/>
              </div>
            </FlexboxGrid.Item>
          );
        })}
      </FlexboxGrid>
    </div>
  );
}
