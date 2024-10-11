import { ApiProperty } from '@nestjs/swagger'
import { Asset, $Enums } from '@prisma/client'

export type Category = $Enums.Category

export class AssetModel implements Asset {
  @ApiProperty()
  id: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  image: string

  @ApiProperty()
  description: string

  @ApiProperty()
  title: string

  @ApiProperty()
  creatorId: bigint

  @ApiProperty()
  category: Category

  @ApiProperty()
  consumerId: bigint | null

  @ApiProperty()
  price: number | null
}

export type AssetCreate = Omit<AssetModel, 'id' | 'createdAt' | 'updatedAt' | 'consumerId'>
