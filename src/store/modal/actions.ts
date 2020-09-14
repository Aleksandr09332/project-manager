import {
  SHOW_MODAL,
  HIDE_MODAL,
  ModalActionTypes,
  NameModal,
} from './types';

export const showModal = (name: NameModal):ModalActionTypes => ({
  type: SHOW_MODAL,
  name,
});

export const hideModal = ():ModalActionTypes => ({ type: HIDE_MODAL });
