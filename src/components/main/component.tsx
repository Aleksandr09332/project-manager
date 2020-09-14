import React from 'react';
import {
  Container,
  Content,
  Footer,
  Header,
} from 'rsuite';
import { LangActionTypes, StepEnums } from '../../store/system/types';
import {
  ITask,
  ITasksState,
  TaskLevelEnum,
  TasksActionTypes,
} from '../../store/tasks/types';
import Task from '../task';
import NavTop from '../navtop/container';
import Modal from '../modal/container';

export interface propsType {
  day: number;
  step: StepEnums;
  tasks: ITasksState;
  onAddTask: (level: TaskLevelEnum, typeTask: string) => TasksActionTypes;
  onToggleStep: () => LangActionTypes;
}

export function CMain(props: propsType) {
  const {
    day,
    step,
    tasks,
    onAddTask,
    onToggleStep,
  } = props;

  return (
    <Container className="full-height">
      <Header>
        <NavTop />
      </Header>
      <Content>
        <div>
          <div>
            <button type="button" onClick={() => onToggleStep()}>Далее</button>
            <p>{step}</p>
            <strong>{day}</strong>
          </div>
          <div>
            <button type="button" onClick={() => onAddTask(TaskLevelEnum.Low, 't')}>Создать таск</button>
            <ul>
              {tasks.map((value: ITask) => {
                const {
                  id,
                  dayFinish,
                  dayStart,
                  level,
                  type,
                  name,
                } = value;

                return (
                  <Task
                    key={name}
                    id={id}
                    name={name}
                    dayFinish={dayFinish}
                    dayStart={dayStart}
                    level={level}
                    type={type}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </Content>
      <Footer className="footer-text">
        <small>
          Проект сделан в учебных целях
        </small>
      </Footer>
      <Modal />
    </Container>
  );
}
