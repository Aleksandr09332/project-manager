import React from 'react';
import { Modal, Nav } from 'rsuite';
import { ModalActionTypes, NameModal } from '../../store/modal/types';
import { ICreateNewGame } from '../../store/global/types';

export interface propsModalType {
  nameModal: NameModal;
  onCreateNewGame: () => ICreateNewGame;
  onHideModal: () => ModalActionTypes;
}
export function CModal(props: propsModalType) {
  const {
    nameModal,
    onHideModal,
    onCreateNewGame,
  } = props;

  const clickNewGame = () => {
    onCreateNewGame();
    onHideModal();
  };
  return (
    <Modal show={nameModal === NameModal.Menu} onHide={() => onHideModal()} className="main-menu-modal">
      <Modal.Title>Главное меню</Modal.Title>
      <Modal.Body>
        <Nav vertical className="main-menu">
          <Nav.Item onClick={() => onHideModal()}>Продолжить</Nav.Item>
          <Nav.Item onClick={clickNewGame}>Новая игра</Nav.Item>
          <Nav.Item eventKey="products">Настройки</Nav.Item>
        </Nav>
      </Modal.Body>
    </Modal>
  );
}
