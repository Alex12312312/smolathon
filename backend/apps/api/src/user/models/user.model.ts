import { ApiProperty } from '@nestjs/swagger'
import { Users } from '@prisma/client'
import { Transform } from 'class-transformer'

export class UserModel implements Users {
  @ApiProperty()
  id: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date

  @ApiProperty()
  avatarUrl: string

  @Transform((val) => Number(val))
  @ApiProperty()
  telegramId: bigint

  @ApiProperty()
  firstName: string

  @ApiProperty()
  lastName: string | null

  @ApiProperty()
  telegramHash: string

  @ApiProperty()
  telegramUsername: string | null
}

export type UserCreate = Omit<UserModel, 'id' | 'createdAt' | 'updatedAt'>

export type UserUpdate = Partial<
  Omit<UserModel, 'id' | 'createdAt' | 'updatedAt'> & { avatarUrl: string }
>
