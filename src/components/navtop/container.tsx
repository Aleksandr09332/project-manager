import React from 'react';
import { connect } from 'react-redux';
import { toggleLang } from '../../store/system/actions';
import { stateType } from '../../store/types';
import { propsNavTopType, CNavTop } from './component';

const NavTopContainer = function createMainContainer(props: any) {
  const {
    langCode,
    onToggleLang,
  }: propsNavTopType = props as propsNavTopType;

  return (
    <CNavTop
      langCode={langCode}
      onToggleLang={onToggleLang}
    />
  );
};

const mapStateToProps = (state: stateType) => ({
  langCode: state.system.lang,
});

const mapDispatchToProps = {
  onToggleLang: toggleLang,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavTopContainer);
