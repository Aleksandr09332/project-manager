import React from 'react';
import { connect } from 'react-redux';
import { updateMaxCountTasks } from '../../store/board/actions';
import { moveTask } from '../../store/tasks/actions';
import { TState } from '../../store/types';
import { BoardPropsType, CBoard } from './component';

const BoardContainer = ({
  step,
  tasks,
  columns,
  workers,
  onMoveTask,
  onUpdateMaxCountTasks,
}: BoardPropsType) => (
  <CBoard
    step={step}
    tasks={tasks}
    columns={columns}
    workers={workers}
    onMoveTask={onMoveTask}
    onUpdateMaxCountTasks={onUpdateMaxCountTasks}
  />
);

const mapStateToProps = (state: TState) => ({
  // langCode: state.system.lang,
  step: state.system.step,
  columns: state.board,
  tasks: state.tasks,
  workers: state.workers,
});

const mapDispatchToProps = {
  onUpdateMaxCountTasks: updateMaxCountTasks,
  onMoveTask: moveTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
