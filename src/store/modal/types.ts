export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

interface IShowModal {
  type: typeof SHOW_MODAL;
  name: NameModal;
}

interface IHideModal {
  type: typeof HIDE_MODAL;
}

export interface IModaleState {
  name: NameModal,
}

// Список всех модальных окон
export enum NameModal {
  null = '',
  Menu = 'Menu',
}

export type ModalActionTypes = IShowModal | IHideModal;
