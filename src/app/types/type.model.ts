export type QuoteType = {
  quote: string;
  character: string;
  image: string;
  characterDirection: Direction;
};

export enum Direction {
  Left = 'Left',
  Right = 'Right',
}
