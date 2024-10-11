import { PrismaService } from '@app/db'
import { Inject, Injectable } from '@nestjs/common'
import { AssetCreate, AssetModel } from './models/asset.model'

@Injectable()
export class AssetService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject('USER_ID') private readonly assetId: () => string,
  ) {}

  async create(params: { data: AssetCreate }): Promise<AssetModel | null> {
    const { data } = params

    return this.prisma.asset.create({
      data: {
        ...data,
        id: this.assetId(),
      },
    })
  }

  async updateConsumer(params: {
    assetId: string
    consumerId: number
  }): Promise<AssetModel | null> {
    const { assetId, consumerId } = params

    return this.prisma.asset.update({
      where: {
        id: assetId,
      },
      data: {
        consumerId: consumerId,
      },
    })
  }

  async findAll(params: { limit?: number; offset?: number }): Promise<AssetModel[]> {
    const { limit, offset } = params

    return this.prisma.asset.findMany({
      take: limit ?? 10,
      skip: offset ?? 0,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        image: true,
        description: true,
        title: true,
        creatorId: true,
        consumerId: true,
        comments: true,
      },
    })
  }
}
