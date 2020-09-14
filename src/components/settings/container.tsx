import React from 'react';
import { connect } from 'react-redux';
import { toggleLang } from '../../store/system/actions';
import { stateType } from '../../store/types';
import { propsSettingsType, CSettings } from './component';

const SettingContainer = function createSettingContainer(props: any) {
  const {
    langCode,
    onToggleLang,
  }: propsSettingsType = props as propsSettingsType;

  return (
    <CSettings
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
