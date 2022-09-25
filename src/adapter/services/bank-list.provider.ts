import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import { Bank, IBankListProvider } from '../../core/domain';

@Injectable()
export class BankListProvider implements IBankListProvider {
  constructor(private readonly bacenBanksListClient: HttpService) {}

  getAll(): Promise<Bank[]> {
    const CRLF = '\r\n';
    const LF = '\n';

    return firstValueFrom(
      this.bacenBanksListClient.get<string>('').pipe(
        map((response) => response.data),
        map((rawCsv) =>
          rawCsv.trim().replace(new RegExp(CRLF, 'g'), LF).split(LF),
        ),
        map((csvRows) => csvRows.slice(1).map((x) => x.split(','))),
        map((csvRowsData) =>
          csvRowsData.map(([ispb, shortName, compe, , , longName]) => [
            ispb?.trim(),
            compe?.trim(),
            shortName?.trim(),
            longName?.trim(),
          ]),
        ),
        map((csvRowsData) =>
          csvRowsData.map(
            ([ispb, compe, shortName, longName]) =>
              new Bank({ ispb, compe, shortName, longName }),
          ),
        ),
      ),
    );
  }
}
