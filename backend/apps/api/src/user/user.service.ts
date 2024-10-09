import { Inject, Injectable } from '@nestjs/common'
import { UserCreate, UserModel, UserUpdate } from './models/user.model'
import { PrismaService } from '@app/db'
import { UserNotFoundException } from '@app/domain/errors/users/user.not-found.exception'

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
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

  async createOrUpdate() {}

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
}
