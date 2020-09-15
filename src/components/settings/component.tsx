import React from 'react';
import { SelectPicker } from 'rsuite';
import ButtonBack from '../back/container';
import { LangActionTypes, LangEnums } from '../../store/system/types';

export interface propsSettingsType {
  langCode: LangEnums;
  onToggleLang: (lang: LangEnums) => LangActionTypes;
}

export function CSettings(props: propsSettingsType) {
  const { onToggleLang, langCode } = props;
  const langs = [
    {
      value: LangEnums.Ru,
      label: 'Russian',
    },
    {
      value: LangEnums.En,
      label: 'English',
    },
  ];
  return (
    <div>
      <ButtonBack />
      <SelectPicker
        data={langs}
        onSelect={(value:LangEnums) => onToggleLang(value)}
        value={langCode}
      />
    </div>
  );
}
