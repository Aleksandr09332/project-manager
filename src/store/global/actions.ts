import { CREATE_NEW_GAME, ICreateNewGame, ModeGame } from './types';

export const createNewGame = ():ICreateNewGame => ({
  type: CREATE_NEW_GAME,
  mode: ModeGame.Normal,
});
