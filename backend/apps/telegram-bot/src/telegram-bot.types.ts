import { Users } from '@prisma/client'
import { Context } from 'telegraf'

export interface BotContext extends Context {
  userModel: UserModel
  userFirstCreated: boolean
}

export class UserModel implements Users {
  id: string
  createdAt: Date
  updatedAt: Date
  avatarUrl: string
  telegramId: bigint
  firstName: string
  lastName: string | null
  telegramUsername: string | null
  wallet: string | null
  balance: number
}
