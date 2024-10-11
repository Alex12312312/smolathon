import { Update, Start, Ctx } from 'nestjs-telegraf'
import { BotContext } from './telegram-bot.types'
import { PrismaService } from '@app/db'
import { ConfigService } from '@nestjs/config'

@Update()
export class TelegramBotUpdate {
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
      const inviterId = payload

      const inviter = await this.prisma.users.findFirst({ where: { id: inviterId } })

      if (!inviter) {
        await this.replyWelcome(ctx)
        return
      }

      const invite = await this.prisma.invite.findFirst({ where: { receiverId: ctx.userModel.id } })

      if (!!invite) {
        await this.replyWelcome(ctx)
        return
      }

      await this.prisma.invite.create({
        data: {
          senderId: inviterId,
          receiverId: ctx.userModel.id,
        },
      })
    }

    await this.replyWelcome(ctx)
  }
}
