import React from 'react';
import {
  Icon,
  Nav,
  Navbar,
} from 'rsuite';
import { NavActionTypes, NameModal } from '../../store/navigation/types';

export interface propsNavTopType {
  onShowModal: (name: NameModal) => NavActionTypes;
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
