import { TCreateNewGame } from '../global/types';
import RU from '../../lang/ru.json';

export const TOGGLE_LANG = 'TOGGLE_LANG';
export const TOGGLE_STEP = 'TOGGLE_STEP';

interface IToggleLangAction {
  type: typeof TOGGLE_LANG;
  lang: LangEnums;
  messages?: any;
}

interface IToggleStepAction {
  type: typeof TOGGLE_STEP;
}

export interface ISystemState {
  lang: LangEnums;
  step: StepEnums;
  day: number;
  dataLang: typeof RU;
}

export enum LangEnums {
  En = 'en',
  Ru = 'ru',
}

export enum StepEnums {
  Start = 'start',
  Work = 'work',
  Finish = 'finish',
}

export type LangActionTypes = IToggleLangAction|IToggleStepAction|TCreateNewGame;
