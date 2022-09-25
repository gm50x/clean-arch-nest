import { Injectable } from '@nestjs/common';
import {
  IBankListProvider,
  GetAllBanksOutput,
  IGetAllBanksUseCase,
} from '../domain/abstractions';

// $violation:minor
@Injectable()
export class GetAllBanksUseCase implements IGetAllBanksUseCase {
  constructor(private readonly banksProvider: IBankListProvider) {}

  execute(): Promise<GetAllBanksOutput> {
    /**
     * If this were a money transfer service,
     * we would execute a bunch of business validations here
     * through the use of abstractions on services and concrete
     * entities which are domain artifacts.
     * eg.:
     * - check if sender account exists
     * - check if receiver account exists
     * - check if sender account has minimum amount
     * - send money
     */

    return this.banksProvider.getAll();
  }
}
