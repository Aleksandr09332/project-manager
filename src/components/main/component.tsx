import React from 'react';
import { LangEnums, LangActionTypes } from '../../store/language/types';

export interface propsType {
  langCode: LangEnums;
  onToggleLang: (lang: LangEnums) => LangActionTypes;
}

export function CMain(props: propsType) {
  const { langCode, onToggleLang } = props;

  return (
    <div>
      <h1>
        Привет
      </h1>
      <div>
        {langCode === 'ru'
          ? <button type="button" onClick={() => onToggleLang(LangEnums.En)}>EN</button>
          : <button type="button" onClick={() => onToggleLang(LangEnums.Ru)}>RU</button> }
      </div>
    </div>
  );
}
