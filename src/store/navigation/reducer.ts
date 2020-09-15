import {
  HIDE_MODAL,
  SHOW_MODAL,
  SWITCH_SCREEN,
  INavState,
  NameModal,
  NameScreen,
  NavActionTypes,
} from './types';

const initState:INavState = {
  modal: NameModal.Menu,
  screen: NameScreen.Main,
};

export default function (state: INavState = initState, action: NavActionTypes):INavState {
  switch (action.type) {
    case SWITCH_SCREEN:
      return {
        ...state,
        screen: action.screen,
      };
    case SHOW_MODAL:
      return {
        ...state,
        modal: action.name,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: NameModal.null,
      };
    default:
      return state;
  }
}
