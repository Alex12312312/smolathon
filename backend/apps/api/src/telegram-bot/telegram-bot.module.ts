// import { Module } from '@nestjs/common'
// import { ConfigModule, ConfigService } from '@nestjs/config'
// import { TelegrafModule } from 'nestjs-telegraf'
// import { TelegramBotUpdate } from './telegram-bot.update'

// @Module({
//   imports: [
//     TelegrafModule.forRootAsync({
//       inject: [ConfigService],
//       imports: [ConfigModule],
//       useFactory: (configService: ConfigService) => ({
//         token: configService.getOrThrow<string>('TELEGRAM_BOT_TOKEN'),
//       }),
//     }),
//   ],
//   providers: [TelegramBotUpdate],
// })
// export class TelegramBotModule {}
