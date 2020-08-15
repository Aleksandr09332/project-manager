export const TOGGLE_LANG:string = 'TOGGLE_LANG';

interface IToggleLangAction {
  type: typeof TOGGLE_LANG;
  lang: string;
}

export enum LangEnums {
  En = 'en',
  Ru = 'ru',
}

// export type ChatActionTypes = SendMessageAction | DeleteMessageAction
export type LangActionTypes = IToggleLangAction;
