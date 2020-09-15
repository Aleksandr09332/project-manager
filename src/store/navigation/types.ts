export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SWITCH_SCREEN = 'SWITCH_SCREEN';

interface IShowModal {
  type: typeof SHOW_MODAL;
  name: NameModal;
}

interface ISwitchScreen {
  type: typeof SWITCH_SCREEN;
  screen: NameScreen;
}

interface IHideModal {
  type: typeof HIDE_MODAL;
}

export interface INavState {
  modal: NameModal,
  screen: NameScreen,
}

// Список всех модальных окон
export enum NameModal {
  null = '',
  Menu = 'Menu',
}

// Список всех экранов
export enum NameScreen {
  Main = 'Main',
  Settings = 'Settings',
}

export type NavActionTypes = IShowModal | IHideModal | ISwitchScreen;
