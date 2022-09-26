import { Injectable } from '@nestjs/common';
import {
  IBankListProvider,
  GetAllBanksOutput,
  IGetAllBanksUseCase,
} from '@core/domain';

// $violation:minor
@Injectable()
export class GetAllBanksUseCase implements IGetAllBanksUseCase {
  constructor(private readonly banksProvider: IBankListProvider) {}

  execute(): Promise<GetAllBanksOutput> {
    return this.banksProvider.getAll();
  }
}
