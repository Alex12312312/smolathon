import { ApiProperty } from '@nestjs/swagger'
import { Asset } from '@prisma/client'

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
  creatorId: string

  @ApiProperty()
  consumerId: bigint | null
}

export type AssetCreate = Omit<AssetModel, 'id' | 'createdAt' | 'updatedAt'>
