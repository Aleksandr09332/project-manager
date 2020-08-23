export const TOGGLE_LANG = 'TOGGLE_LANG';

interface IToggleLangAction {
  type: typeof TOGGLE_LANG;
  lang: LangEnums;
}

export interface LangState {
  code: LangEnums;
  test: number;
}

export enum LangEnums {
  En = 'en',
  Ru = 'ru',
}

// export type ChatActionTypes = SendMessageAction | DeleteMessageAction
export type LangActionTypes = IToggleLangAction;
