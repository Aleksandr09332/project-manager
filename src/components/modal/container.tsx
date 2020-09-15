import React from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal, switchScreen } from '../../store/navigation/actions';
import { createNewGame } from '../../store/global/actions';
import { stateType } from '../../store/types';
import { propsModalType, CModal } from './component';

const ModalContainer = function createModalContainer(props: any) {
  const {
    nameModal,
    onHideModal,
    onCreateNewGame,
    onSwitchScreen,
  }: propsModalType = props as propsModalType;

  return (
    <CModal
      nameModal={nameModal}
      onHideModal={onHideModal}
      onCreateNewGame={onCreateNewGame}
      onSwitchScreen={onSwitchScreen}
    />
  );
};

const mapStateToProps = (state: stateType) => ({
  nameModal: state.navigation.modal,
});

const mapDispatchToProps = {
  onShowModal: showModal,
  onHideModal: hideModal,
  onCreateNewGame: createNewGame,
  onSwitchScreen: switchScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
