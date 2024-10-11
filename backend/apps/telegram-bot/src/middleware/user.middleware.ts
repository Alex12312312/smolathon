import { Middleware } from 'telegraf'
import { BotContext } from '../telegram-bot.types'
import { PrismaService } from '@app/db'
import { init } from '@paralleldrive/cuid2'

const cuid = init({ length: 16 })

export function userMiddleware(prisma: PrismaService): Middleware<BotContext> {
  return async (ctx, next) => {
    if (ctx.from?.id) {
      const tgUserId = ctx.from.id

      const candidate = await prisma.users.findFirst({ where: { telegramId: tgUserId } })

      ctx.userFirstCreated = !candidate

      ctx.userModel =
        candidate ||
        (await prisma.users.create({
          data: {
            id: cuid(),
            telegramId: tgUserId,
            firstName: ctx.from.first_name,
            lastName: ctx.from.last_name,
            telegramUsername: ctx.from.username,
            avatarUrl: null,
            wallet: null,
            balance: 0,
          },
        }))
    } else {
      console.warn('ctx.from.id is undefined', ctx.from)
    }

    await next()
  }
}
