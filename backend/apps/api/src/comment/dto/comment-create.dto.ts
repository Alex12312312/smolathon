import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CommentCreateDto {
  @ApiProperty()
  @IsString()
  content: string

  @ApiProperty()
  creatorId: bigint

  @ApiProperty()
  assetId: string
}
