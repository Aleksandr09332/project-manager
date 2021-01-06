export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';

export type TCreateNewGame = {
  type: typeof CREATE_NEW_GAME;
  mode: ModeGame;
}

export enum ModeGame {
  Normal = 'Normal',
  Hard = 'Hard',
}

export enum EBoardColumnsSystem {
  Ready = 'Ready',
  Deployed = 'Deployed',
  Closed = 'Closed',
}

export enum EDepartment {
  Analysis = 'Analysis',
  Development = 'Development',
  Testing = 'Testing',
}

export type BoardNameTypes = EBoardColumnsSystem|EDepartment;
