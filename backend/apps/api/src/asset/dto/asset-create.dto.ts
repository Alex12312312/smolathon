import { ApiProperty } from '@nestjs/swagger'
import { Category } from '@prisma/client'
import { IsEnum, IsOptional, IsString } from 'class-validator'

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
  creatorId: number

  @ApiProperty({ enum: ['HeroesAndEvents', 'Activity', 'HistoricalSites', 'DigitalArt'] })
  @IsEnum(Category)
  @IsOptional()
  category: Category

  @ApiProperty()
  price: number
}
