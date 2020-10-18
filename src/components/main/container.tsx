import React from 'react';
import { connect } from 'react-redux';
import { toggleLang, toggleStep } from '../../store/system/actions';
import { addTask } from '../../store/tasks/actions';
import { stateType } from '../../store/types';
import { propsType, CMain } from './component';

const MainContainer = function createMainContainer(props: any) {
  const {
    day,
    step,
    onAddTask,
    onToggleStep,
  }: propsType = props as propsType;

  return (
    <CMain
      step={step}
      day={day}
      onAddTask={onAddTask}
      onToggleStep={onToggleStep}
    />
  );
};

const mapStateToProps = (state: stateType) => ({
  langCode: state.system.lang,
  step: state.system.step,
  day: state.system.day,
});

const mapDispatchToProps = {
  onToggleLang: toggleLang,
  onToggleStep: toggleStep,
  onAddTask: addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
