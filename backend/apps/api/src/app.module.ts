import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { PrismaModule } from '@app/db'
import { TelegramAuthModule } from '@app/common'
import { AssetModule } from './asset/asset.module'
import { CommentModule } from './comment/comment.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    TelegramAuthModule,
    UserModule,
    AssetModule,
    CommentModule,
  ],
})
export class AppModule {}
