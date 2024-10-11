import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TelegrafModule } from 'nestjs-telegraf'
import { TelegramBotUpdate } from './telegram-bot.update'
import { userMiddleware } from './middleware/user.middleware'
import { PrismaModule, PrismaService } from '@app/db'

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot(),
    TelegrafModule.forRootAsync({
      inject: [ConfigService, PrismaService],
      imports: [ConfigModule],
      useFactory: (configService: ConfigService, prisma: PrismaService) => ({
        token: configService.getOrThrow<string>('TELEGRAM_BOT_TOKEN'),
        middlewares: [userMiddleware(prisma)],
        usePoll: true,
      }),
    }),
  ],
  providers: [TelegramBotUpdate],
})
export class TelegramBotModule {}
