import {
  TOGGLE_LANG,
  TOGGLE_STEP,
  LangEnums,
  LangActionTypes,
  ISystemState,
  StepEnums,
} from './types';
import RU from '../../lang/ru.json';
import { CREATE_NEW_GAME } from '../global/types';

const initState = {
  lang: LangEnums.Ru,
  step: StepEnums.Start,
  day: 1,
  dataLang: RU,
};

const steps: Array<StepEnums> = [
  StepEnums.Start,
  StepEnums.Work,
  StepEnums.Finish,
];

const getStep = (current: StepEnums):StepEnums => {
  for (let i = 0; i < steps.length; i++) {
    if (steps[i] === current && i + 1 !== steps.length) {
      return steps[i + 1];
    }
  }
  return StepEnums.Start;
};

const toggleStep = (state: ISystemState):ISystemState => {
  const nextStep = getStep(state.step);
  const { day } = state;
  return {
    ...state,
    step: nextStep,
    // Если начало дня, то значит новый день
    day: nextStep === StepEnums.Start ? day + 1 : day,
  };
};

export default function (state: ISystemState = initState, action: LangActionTypes):ISystemState {
  switch (action.type) {
    case TOGGLE_LANG:
      return {
        ...state,
        lang: action.lang,
        dataLang: action.messages,
      };
    case CREATE_NEW_GAME:
      return initState;
    case TOGGLE_STEP:
      return toggleStep(state);
    default:
      return state;
  }
}
