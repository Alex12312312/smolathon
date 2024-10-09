import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { PrismaModule } from '@app/db'
import { TelegramAuthModule } from '@app/common'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, TelegramAuthModule, UserModule],
})
export class AppModule {}
