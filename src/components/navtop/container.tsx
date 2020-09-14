import React from 'react';
import { connect } from 'react-redux';
import { toggleLang } from '../../store/system/actions';
import { showModal } from '../../store/modal/actions';
import { stateType } from '../../store/types';
import { propsNavTopType, CNavTop } from './component';

const NavTopContainer = function createMainContainer(props: any) {
  const {
    langCode,
    onToggleLang,
    onShowModal,
  }: propsNavTopType = props as propsNavTopType;

  return (
    <CNavTop
      langCode={langCode}
      onToggleLang={onToggleLang}
      onShowModal={onShowModal}
    />
  );
};

const mapStateToProps = (state: stateType) => ({
  langCode: state.system.lang,
});

const mapDispatchToProps = {
  onToggleLang: toggleLang,
  onShowModal: showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavTopContainer);
