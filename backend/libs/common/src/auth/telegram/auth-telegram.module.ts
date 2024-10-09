import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TelegramAuthService } from './auth-telegram.service'
import { TelegramAuthGuard } from './auth-telegram.guard'

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [TelegramAuthService, TelegramAuthGuard],
  exports: [TelegramAuthService],
})
export class TelegramAuthModule {}
