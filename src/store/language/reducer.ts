import { TOGGLE_LANG, LangEnums, LangActionTypes } from './types';

export default function (state = LangEnums.Ru, action: LangActionTypes):string {
  switch (action.type) {
    case TOGGLE_LANG:
      return action.lang;
    default:
      return state;
  }
}
