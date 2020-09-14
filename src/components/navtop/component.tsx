import React from 'react';
import {
  Icon,
  Nav,
  Navbar,
} from 'rsuite';
import { ModalActionTypes, NameModal } from '../../store/modal/types';

export interface propsNavTopType {
  onShowModal: (name: NameModal) => ModalActionTypes;
}

export function CNavTop(props: propsNavTopType) {
  const { onShowModal } = props;
  return (
    <Navbar appearance="inverse">
      <Navbar.Header>
        <h4 className="nav-top-name">getKanban</h4>
      </Navbar.Header>
      <Navbar.Body>
        <Nav />
        <Nav pullRight>
          <Nav.Item icon={<Icon icon="bars" />} onClick={() => onShowModal(NameModal.Menu)}>Menu</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
}
