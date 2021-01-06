import React from 'react';
import { connect } from 'react-redux';
import { TState } from '../../store/types';
import { propsRouterType, CRouter } from './component';

const ModalContainer = function createModalContainer(props: any) {
  const {
    screen,
  }: propsRouterType = props as propsRouterType;

  return (
    <CRouter
      screen={screen}
    />
  );
};

const mapStateToProps = (state: TState) => ({
  screen: state.navigation.screen,
});

export default connect(mapStateToProps)(ModalContainer);
