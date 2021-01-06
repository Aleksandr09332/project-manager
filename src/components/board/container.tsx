import React from 'react';
import { connect } from 'react-redux';
import { updateMaxCountTasks } from '../../store/board/actions';
import { TState } from '../../store/types';
import { BoardPropsType, CBoard } from './component';

const BoardContainer = function createMainContainer(props: any) {
  const {
    step,
    tasks,
    columns,
    workers,
    onUpdateMaxCountTasks,
  }: BoardPropsType = props as BoardPropsType;

  return (
    <CBoard
      step={step}
      tasks={tasks}
      columns={columns}
      workers={workers}
      onUpdateMaxCountTasks={onUpdateMaxCountTasks}
    />
  );
};

const mapStateToProps = (state: TState) => ({
  // langCode: state.system.lang,
  step: state.system.step,
  columns: state.board,
  tasks: state.tasks,
  workers: state.workers,
});

const mapDispatchToProps = {
  onUpdateMaxCountTasks: updateMaxCountTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
