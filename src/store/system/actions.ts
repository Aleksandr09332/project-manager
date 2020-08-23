import {
  TOGGLE_LANG,
  TOGGLE_STEP,
  LangActionTypes,
  LangEnums,
} from './types';

export const toggleLang = (lang: LangEnums):LangActionTypes => ({
  type: TOGGLE_LANG,
  lang,
});

export const toggleStep = ():LangActionTypes => ({ type: TOGGLE_STEP });
