import React from 'react';
import { Modal, Nav } from 'rsuite';
import { NavActionTypes, NameModal, NameScreen } from '../../store/navigation/types';
import { ICreateNewGame } from '../../store/global/types';

export interface propsModalType {
  nameModal: NameModal;
  onCreateNewGame: () => ICreateNewGame;
  onSwitchScreen: (screen: NameScreen) => NavActionTypes;
  onHideModal: () => NavActionTypes;
}
export function CModal(props: propsModalType) {
  const {
    nameModal,
    onHideModal,
    onCreateNewGame,
    onSwitchScreen,
  } = props;

  const clickNewGame = () => {
    onCreateNewGame();
    onHideModal();
  };
  const clickSetting = () => {
    onSwitchScreen(NameScreen.Settings);
    onHideModal();
  };
  return (
    <Modal show={nameModal === NameModal.Menu} onHide={() => onHideModal()} className="main-menu-modal">
      <Modal.Title>Главное меню</Modal.Title>
      <Modal.Body>
        <Nav vertical className="main-menu">
          <Nav.Item onClick={() => onHideModal()}>Продолжить</Nav.Item>
          <Nav.Item onClick={clickNewGame}>Новая игра</Nav.Item>
          <Nav.Item onClick={clickSetting}>Настройки</Nav.Item>
        </Nav>
      </Modal.Body>
    </Modal>
  );
}
