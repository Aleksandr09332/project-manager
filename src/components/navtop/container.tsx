import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../store/navigation/actions';
import { propsNavTopType, CNavTop } from './component';

const NavTopContainer = function createNavTopContainer(props: any) {
  const {
    onShowModal,
  }: propsNavTopType = props as propsNavTopType;

  return (
    <CNavTop
      onShowModal={onShowModal}
    />
  );
};

const mapDispatchToProps = {
  onShowModal: showModal,
};

export default connect(() => ({}), mapDispatchToProps)(NavTopContainer);
