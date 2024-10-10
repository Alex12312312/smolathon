import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

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

  @ApiProperty()
  @IsString()
  @IsOptional()
  consumerId: bigint
}
