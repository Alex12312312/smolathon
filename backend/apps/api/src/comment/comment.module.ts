import { init } from '@paralleldrive/cuid2'
import { UserService } from '../user/user.service'
import { CommentService } from './comment.service'
import { TelegramContextInterceptor } from '../auth/interceptors/telegram-context.interceptor'
import { PrismaModule } from '@app/db'
import { Module } from '@nestjs/common'
import { CommentController } from './comment.controller'
import { AvatarModule } from '../avatar/avatar.module'

@Module({
  exports: [CommentService],
  imports: [PrismaModule, AvatarModule],
  providers: [
    CommentService,
    UserService,
    {
      provide: 'USER_ID',
      useValue: init({ length: 16 }),
    },
    TelegramContextInterceptor,
  ],
  controllers: [CommentController],
})
export class CommentModule {}
