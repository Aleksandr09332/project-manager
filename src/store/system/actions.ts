import {
  TOGGLE_LANG,
  TOGGLE_STEP,
  LangActionTypes,
  LangEnums,
} from './types';

const saveLang = (lang: LangEnums, messages?: any):LangActionTypes => ({
  type: TOGGLE_LANG,
  lang,
  messages,
});

export const toggleLang = (lang: LangEnums) => (dispatch: any, getState: any) => {
  import(`../../lang/${lang}.json`).then(({ default: dataJson }) => {
    dispatch(saveLang(lang, dataJson));
  });
};

export const toggleStep = ():LangActionTypes => ({ type: TOGGLE_STEP });
