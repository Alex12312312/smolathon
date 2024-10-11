import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { PrismaModule } from '@app/db'
import { TelegramAuthModule } from '@app/common'
import { AssetModule } from './asset/asset.module'
import { CommentModule } from './comment/comment.module'
//import { TelegramBotModule } from './telegram-bot/telegram-bot.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    TelegramAuthModule,
    UserModule,
    AssetModule,
    CommentModule,
    //TelegramBotModule,
  ],
})
export class AppModule {}
