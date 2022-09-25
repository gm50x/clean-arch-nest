import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { IGetAllBanksUseCase } from '../../core';
import { Bank } from '../models/bank.model';

@ApiTags('Banks')
@Controller('banks')
export class BanksController {
  constructor(private readonly useCase: IGetAllBanksUseCase) {}

  @Get()
  @ApiOkResponse({ type: Bank, isArray: true })
  getAllBanks(): any {
    return this.useCase.execute();
  }
}
