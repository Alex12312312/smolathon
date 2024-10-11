import { PrismaModule } from '@app/db'
import { AssetService } from './asset.service'
import { init } from '@paralleldrive/cuid2'
import { AssetController } from './asset.controller'
import { Module } from '@nestjs/common'
import { TelegramContextInterceptor } from '../auth/interceptors/telegram-context.interceptor'
import { UserService } from '../user/user.service'
import { AvatarModule } from '../avatar/avatar.module'
import { CommentModule } from '../comment/comment.module'

@Module({
  exports: [AssetService],
  imports: [PrismaModule, AvatarModule, CommentModule],
  providers: [
    AssetService,
    UserService,
    {
      provide: 'USER_ID',
      useValue: init({ length: 16 }),
    },
    TelegramContextInterceptor,
  ],
  controllers: [AssetController],
})
export class AssetModule {}
