import { Update, Start, Ctx } from 'nestjs-telegraf'
import { BotContext } from './telegram-bot.types'
import { PrismaService } from '@app/db'
import { ConfigService } from '@nestjs/config'

@Update()
export class TelegramBotUpdate {
  private readonly REFERRAL_BONUS = 100

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  private async replyWelcome(ctx: BotContext) {
    await ctx.reply(
      `Привет! Добро пожаловать в Цифровой город!
      
Здесь ты сможешь проявить свои навыки в цифровом творчестве и  предпринимательской деятельности. А также узнать что-то новое о замечательном городе Смоленске! 🤓
      `,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                web_app: { url: this.config.getOrThrow<string>('WEB_APP_URL') },
                text: 'Открыть 🚀',
              },
            ],
          ],
        },
      },
    )
  }

  @Start()
  async start(@Ctx() ctx: BotContext) {
    const payload: string | undefined =
      // @ts-expect-error because idk
      ctx.payload && typeof ctx.payload === 'string' && ctx.payload.length > 0 && ctx.payload !== ''
        ? // @ts-expect-error because idk
          ctx.payload
        : undefined

    if (payload) {
      const senderId = payload
      const receiverId = ctx.userModel.id

      const inviter = await this.prisma.users.findFirst({ where: { id: senderId } })

      if (!inviter) {
        await this.replyWelcome(ctx)
        return
      }

      const invite = await this.prisma.invite.findFirst({ where: { receiverId } })

      if (!!invite) {
        await this.replyWelcome(ctx)
        return
      }

      await this.prisma.$transaction(async (tx) => {
        await tx.invite.create({
          data: {
            senderId,
            receiverId,
          },
        })

        await tx.users.update({
          where: { id: senderId },
          data: {
            balance: {
              increment: this.REFERRAL_BONUS,
            },
          },
        })

        await tx.users.update({
          where: { id: receiverId },
          data: {
            balance: {
              increment: this.REFERRAL_BONUS,
            },
          },
        })
      })
    }

    await this.replyWelcome(ctx)
  }
}
