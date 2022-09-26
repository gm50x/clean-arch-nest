import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { Bank, IGetAllBanksUseCase } from '@core/domain';

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
