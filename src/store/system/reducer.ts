import {
  TOGGLE_LANG,
  TOGGLE_STEP,
  LangEnums,
  LangActionTypes,
  SystemState,
  StepEnums,
} from './types';

const initState = {
  lang: LangEnums.Ru,
  step: StepEnums.Start,
  day: 1,
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

const toggleStep = (state: SystemState):SystemState => {
  const nextStep = getStep(state.step);
  const { day } = state;
  return {
    ...state,
    step: nextStep,
    // Если начало дня, то значит новый день
    day: nextStep === StepEnums.Start ? day + 1 : day,
  };
};

export default function (state: SystemState = initState, action: LangActionTypes):SystemState {
  switch (action.type) {
    case TOGGLE_LANG:
      return {
        ...state,
        lang: action.lang,
      };
    case TOGGLE_STEP:
      return toggleStep(state);
    default:
      return state;
  }
}
