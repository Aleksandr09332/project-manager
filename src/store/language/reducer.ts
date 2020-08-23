import {
  TOGGLE_LANG,
  LangEnums,
  LangActionTypes,
  LangState,
} from './types';

const initState = {
  code: LangEnums.Ru,
  test: 1,
};

export default function (state: LangState = initState, action: LangActionTypes):LangState {
  switch (action.type) {
    case TOGGLE_LANG:
      return {
        ...state,
        code: action.lang,
      };
    default:
      return state;
  }
}
