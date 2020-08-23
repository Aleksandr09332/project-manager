import { TOGGLE_LANG, LangActionTypes, LangEnums } from './types';

export const toggleLang = (lang: LangEnums):LangActionTypes => ({
  type: TOGGLE_LANG,
  lang,
});
