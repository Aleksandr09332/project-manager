import {
  CREATE_NEW_GAME,
  ICreateNewGame,
} from './types';

export const createNewGame = ():ICreateNewGame => ({
  type: CREATE_NEW_GAME,
});
