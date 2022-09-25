export class Bank {
  shortName: string;
  longName: string;
  compe: string;
  ispb: string;

  constructor(args?: Partial<Bank>) {
    Object.assign(this, args || {});
  }
}
