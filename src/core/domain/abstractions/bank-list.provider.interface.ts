import { Bank } from '../models';

// $violation:weird, we use abstract classes instead of interfaces
// in order to be able to import the tokens directly from nest's DI
// without having to tie abstraction and implementations individualy
export abstract class IBankListProvider {
  abstract getAll(): Promise<Bank[]>;
}
