import React from 'react';
import { connect } from 'react-redux';
import { toggleLang } from '../../store/language/actions';
import { stateType } from '../../store/types';
import { propsType, CMain } from './component';

const MainContainer = function createMainContainer(props: any) {
  const { langCode, onToggleLang } = props as propsType;

  return <CMain langCode={langCode} onToggleLang={onToggleLang} />;
};

const mapStateToProps = (state: stateType) => ({
  langCode: state.lang.code,
});

const mapDispatchToProps = {
  onToggleLang: toggleLang,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
