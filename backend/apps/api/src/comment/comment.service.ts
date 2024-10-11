import { PrismaService } from '@app/db'
import { Inject, Injectable } from '@nestjs/common'
import { CommentCreate, CommentModel } from './models/comment.model'
import { CommentUpdateDto } from './dto/comment-update.dto'

@Injectable()
export class CommentService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject('USER_ID') private readonly commentId: () => string,
  ) {}

  async create(params: { data: CommentCreate }): Promise<CommentModel | null> {
    const { data } = params

    return this.prisma.comment.create({
      data: {
        ...data,
        id: this.commentId(),
      },
    })
  }

  async update(params: { id: string; data: CommentUpdateDto }): Promise<CommentModel | null> {
    const { id, data } = params

    return this.prisma.comment.update({
      where: { id },
      data: {
        ...data,
      },
    })
  }

  async findAll(params: { limit?: number; offset?: number }): Promise<CommentModel[]> {
    const { limit, offset } = params

    return this.prisma.comment.findMany({
      take: limit ?? 10,
      skip: offset ?? 0,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,
        creatorId: true,
        assetId: true,
      },
    })
  }

  async getAllByAssetId(params: { assetId: string }): Promise<CommentModel[]> {
    const { assetId } = params

    return this.prisma.comment.findMany({
      where: { assetId: assetId },
    })
  }
}
