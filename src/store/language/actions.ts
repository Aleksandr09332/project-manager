import { TOGGLE_LANG, LangActionTypes } from './types';

export const toggleLang = (lang: string):LangActionTypes => ({
  type: TOGGLE_LANG,
  lang,
});
