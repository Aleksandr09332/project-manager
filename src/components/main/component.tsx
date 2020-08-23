import React from 'react';
import { LangEnums, LangActionTypes, StepEnums } from '../../store/system/types';

export interface propsType {
  langCode: LangEnums;
  day: number;
  step: StepEnums;
  onToggleLang: (lang: LangEnums) => LangActionTypes;
  onToggleStep: () => LangActionTypes;
}

export function CMain(props: propsType) {
  const {
    day,
    step,
    langCode,
    onToggleLang,
    onToggleStep,
  } = props;

  return (
    <div>
      <h1>
        Привет
      </h1>
      <div>
        <div>
          {langCode === 'ru'
            ? <button type="button" onClick={() => onToggleLang(LangEnums.En)}>EN</button>
            : <button type="button" onClick={() => onToggleLang(LangEnums.Ru)}>RU</button> }
        </div>
        <div>
          <button type="button" onClick={() => onToggleStep()}>Далее</button>
          <p>{step}</p>
          <strong>{day}</strong>
        </div>
      </div>
    </div>
  );
}
