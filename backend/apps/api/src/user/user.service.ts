import { Inject, Injectable } from '@nestjs/common'
import { UserCreate, UserModel, UserUpdate } from './models/user.model'
import { PrismaService } from '@app/db'
import { UserNotFoundException } from '@app/domain/errors/users/user.not-found.exception'
import { TelegramUserData } from '@telegram-auth/server'
import { AvatarService } from '../avatar/avatar.service'

@Injectable()
export class UserService {
  static createOrUpdate: any
  constructor(
    private readonly prisma: PrismaService,
    private readonly avatar: AvatarService,
    @Inject('USER_ID') private readonly userId: () => string,
  ) {}

  async assertUserExistsById(id: string): Promise<void> {
    const candidate = await this.prisma.users.findFirst({ where: { id } })

    if (!candidate) {
      throw new UserNotFoundException(id)
    }
  }

  async findById(params: { id: string }): Promise<UserModel | null> {
    const { id } = params

    return this.prisma.users.findFirst({ where: { id } })
  }

  async findByTgId(params: { tgId: number | bigint }): Promise<UserModel | null> {
    const { tgId } = params

    return this.prisma.users.findFirst({ where: { telegramId: tgId } })
  }

  async createOrUpdate(params: { data: TelegramUserData }): Promise<UserModel | null> {
    const { data } = params
    return this.prisma.users.upsert({
      where: {
        telegramId: data.id,
      },
      update: {
        telegramUsername: data.username,
        firstName: data.first_name,
        lastName: data.last_name,
      },
      create: {
        id: this.userId(),
        telegramId: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        telegramUsername: data.username,
        avatarUrl: await this.avatar.getAvatarByTelegramId({ telegramId: data.id }),
        wallet: null,
      },
    })
  }

  async create(params: { data: UserCreate }): Promise<UserModel | null> {
    const { data } = params

    return this.prisma.users.create({
      data: {
        ...data,
        id: this.userId(),
      },
    })
  }

  async update(params: { id: string; data: UserUpdate }): Promise<UserModel | null> {
    const { id, data } = params

    await this.assertUserExistsById(id)

    return this.prisma.users.update({
      where: { id },
      data: {
        ...data,
      },
    })
  }

  async updateWallet(params: {
    telegramId: number
    wallet: string | null
  }): Promise<UserModel | null> {
    const { telegramId, wallet } = params

    return this.prisma.users.update({
      where: { telegramId },
      data: {
        wallet: wallet,
      },
    })
  }
}
