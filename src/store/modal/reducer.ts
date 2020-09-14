import {
  SHOW_MODAL,
  HIDE_MODAL,
  NameModal,
  ModalActionTypes,
  IModaleState,
} from './types';

const initState = {
  name: NameModal.Menu,
};

export default function (state: IModaleState = initState, action: ModalActionTypes):IModaleState {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        name: action.name,
      };
    case HIDE_MODAL:
      return {
        ...state,
        name: NameModal.null,
      };
    default:
      return state;
  }
}
