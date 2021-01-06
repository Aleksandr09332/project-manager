import { CREATE_NEW_GAME, TCreateNewGame, ModeGame } from './types';

export const createNewGame = ():TCreateNewGame => ({
  type: CREATE_NEW_GAME,
  mode: ModeGame.Normal,
});
