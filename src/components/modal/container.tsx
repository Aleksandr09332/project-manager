import React from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../../store/modal/actions';
import { createNewGame } from '../../store/global/actions';
import { stateType } from '../../store/types';
import { propsModalType, CModal } from './component';

const ModalContainer = function createModalContainer(props: any) {
  const {
    nameModal,
    onHideModal,
    onCreateNewGame,
  }: propsModalType = props as propsModalType;

  return (
    <CModal
      nameModal={nameModal}
      onHideModal={onHideModal}
      onCreateNewGame={onCreateNewGame}
    />
  );
};

const mapStateToProps = (state: stateType) => ({
  nameModal: state.modal.name,
});

const mapDispatchToProps = {
  onShowModal: showModal,
  onHideModal: hideModal,
  onCreateNewGame: createNewGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
