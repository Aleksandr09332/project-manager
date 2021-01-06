import React from 'react';
import { connect } from 'react-redux';
import { toggleLang } from '../../store/system/actions';
import { TState } from '../../store/types';
import { propsSettingsType, CSettings } from './component';

const SettingContainer = function createSettingContainer(props: any) {
  const {
    langCode,
    onToggleLang,
    dataLang,
  }: propsSettingsType = props as propsSettingsType;

  return (
    <CSettings
      langCode={langCode}
      dataLang={dataLang}
      onToggleLang={onToggleLang}
    />
  );
};

const mapStateToProps = (state: TState) => ({
  langCode: state.system.lang,
  dataLang: state.system.dataLang,
});

const mapDispatchToProps = {
  onToggleLang: toggleLang,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
