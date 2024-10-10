import { Module } from '@nestjs/common'
import { TelegramModule } from '../telegram/telegram.module'
import { AvatarService } from './avatar.service'

@Module({
  imports: [TelegramModule],
  exports: [AvatarService],
  providers: [AvatarService],
})
export class AvatarModule {}
