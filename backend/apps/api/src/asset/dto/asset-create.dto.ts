import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class AssetCreateDto {
  @ApiProperty()
  @IsString()
  image: string

  @ApiProperty()
  @IsString()
  description: string

  @ApiProperty()
  @IsString()
  title: string

  @ApiProperty()
  @IsString()
  creatorId: string
}
