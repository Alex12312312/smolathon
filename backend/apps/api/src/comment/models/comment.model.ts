import { ApiProperty } from '@nestjs/swagger'
import { Comment } from '@prisma/client'

export class CommentModel implements Comment {
  @ApiProperty()
  id: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  content: string

  @ApiProperty()
  creatorId: bigint

  @ApiProperty()
  assetId: string
}

export type CommentCreate = Omit<CommentModel, 'id' | 'createdAt' | 'updatedAt'>
