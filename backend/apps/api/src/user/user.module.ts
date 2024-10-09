import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { init } from '@paralleldrive/cuid2'
import { PrismaModule } from '@app/db'
import { TelegramContextInterceptor } from '../auth/interceptors/telegram-context.interceptor'
import { TonWalletGuard } from '../auth/guards/ton-wallet.guard'

@Module({
  exports: [UserService],
  imports: [PrismaModule],
  providers: [
    UserService,
    {
      provide: 'USER_ID',
      useValue: init({ length: 16 }),
    },
    TelegramContextInterceptor,
    TonWalletGuard,
  ],
  controllers: [UserController],
})
export class UserModule {}
