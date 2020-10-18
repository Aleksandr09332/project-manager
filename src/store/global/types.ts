export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';

export interface ICreateNewGame {
  type: typeof CREATE_NEW_GAME;
  mode: ModeGame;
}

export enum ModeGame {
  Normal = 'Normal',
  Hard = 'Hard',
}

export enum BoardColumnsSystem {
  Ready = 'Ready',
  Deployed = 'Deployed',
  Closed = 'Closed',
}

export enum BoardColumnsDepartment {
  Analysis = 'Analysis',
  Development = 'Development',
  Testing = 'Testing',
}

export type BoardNameTypes = BoardColumnsDepartment|BoardColumnsSystem;
