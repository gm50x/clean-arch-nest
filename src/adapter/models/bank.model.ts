import { ApiProperty } from '@nestjs/swagger';

export class Bank {
  @ApiProperty()
  shortName: string;

  @ApiProperty()
  longName: string;

  @ApiProperty()
  compe: string;

  @ApiProperty()
  ispb: string;
}
