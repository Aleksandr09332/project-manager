import React from 'react';
import { SelectPicker } from 'rsuite';
import { FormattedMessage, IntlProvider } from 'react-intl';
import ButtonBack from '../back/container';
import { LangActionTypes, LangEnums } from '../../store/system/types';

export interface propsSettingsType {
  langCode: LangEnums;
  dataLang: any;
  onToggleLang: (lang: LangEnums) => LangActionTypes;
}

export function CSettings(props: propsSettingsType) {
  const { onToggleLang, langCode, dataLang } = props;
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
    <IntlProvider messages={dataLang} locale={langCode}>
      <div>
        <p><FormattedMessage id="hello" values={{ name: 'Вася' }} /></p>
        <p><FormattedMessage id="bay" /></p>
        <ButtonBack />
        <SelectPicker
          data={langs}
          onSelect={(value:LangEnums) => onToggleLang(value)}
          value={langCode}
        />
      </div>
    </IntlProvider>
  );
}
