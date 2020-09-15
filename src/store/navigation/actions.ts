import {
  SHOW_MODAL,
  HIDE_MODAL,
  SWITCH_SCREEN,
  NavActionTypes,
  NameModal,
  NameScreen,
} from './types';

export const showModal = (name: NameModal):NavActionTypes => ({
  type: SHOW_MODAL,
  name,
});

export const switchScreen = (screen: NameScreen):NavActionTypes => ({
  type: SWITCH_SCREEN,
  screen,
});

export const hideModal = ():NavActionTypes => ({ type: HIDE_MODAL });
