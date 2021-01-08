export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';

export type TCreateNewGame = {
  type: typeof CREATE_NEW_GAME;
  mode: ModeGame;
}

export enum ModeGame {
  Normal = 'Normal',
  Hard = 'Hard',
}

export enum BoardColumnsSystemEnum {
  Ready = 'Ready',
  Deployed = 'Deployed',
  Closed = 'Closed',
}

export enum DepartmentEnum {
  Analysis = 'Analysis',
  Development = 'Development',
  Testing = 'Testing',
}

export type BoardNameTypes = BoardColumnsSystemEnum|DepartmentEnum;
