import React from 'react';
import { connect } from 'react-redux';
import { updateMaxCountTasks } from '../../store/board/actions';
import { stateType } from '../../store/types';
import { BoardPropsType, CBoard } from './component';
import {CMain} from "../main/component";

const BoardContainer = function createMainContainer(props: any) {
  const {
    step,
    tasks,
    columns,
    onUpdateMaxCountTasks,
  }: BoardPropsType = props as BoardPropsType;

  return (
    <CBoard
      step={step}
      tasks={tasks}
      columns={columns}
      onUpdateMaxCountTasks={onUpdateMaxCountTasks}
    />
  );
};

const mapStateToProps = (state: stateType) => ({
  // langCode: state.system.lang,
  step: state.system.step,
  columns: state.board,
  tasks: state.tasks,
});

const mapDispatchToProps = {
  onUpdateMaxCountTasks: updateMaxCountTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
