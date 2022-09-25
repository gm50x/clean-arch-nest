import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  IBankListProvider,
  IGetAllBanksUseCase,
  GetAllBanksUseCase,
} from '../core';
import { BanksController } from './controllers/banks.controller';
import { BankListProvider } from './services/bank-list.provider';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({
      baseURL:
        'https://www.bcb.gov.br/pom/spb/estatistica/port/ParticipantesSTRport.csv',
    }),
  ],
  controllers: [BanksController],
  providers: [
    { provide: IBankListProvider, useClass: BankListProvider },
    { provide: IGetAllBanksUseCase, useClass: GetAllBanksUseCase },
  ],
})
export class AppModule {}
