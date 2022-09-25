import { Bank } from '../models';
import { UseCase } from './use-case';

export type GetAllBanksInput = void;

export type GetAllBanksOutput = Bank[];

export abstract class IGetAllBanksUseCase
  implements UseCase<GetAllBanksInput, Promise<GetAllBanksOutput>>
{
  abstract execute(): Promise<GetAllBanksOutput>;
}
