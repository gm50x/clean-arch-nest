import { Test, TestingModule } from '@nestjs/testing';
import { BanksController } from './banks.controller';

import { IGetAllBanksUseCase } from '../../core';

describe('AppController', () => {
  let appController: BanksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BanksController],
      providers: [
        {
          provide: IGetAllBanksUseCase,
          useValue: { execute: () => [] },
        },
      ],
    }).compile();

    appController = app.get<BanksController>(BanksController);
  });

  describe('root', () => {
    it('should return an array', () => {
      expect(appController.getAllBanks()).toBeInstanceOf(Array);
    });
  });
});
