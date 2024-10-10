import { Global, Module } from '@nestjs/common'
import { TelegramService } from './telegram.service'
import { ConfigModule } from '@nestjs/config'
import { RateLimiterModule } from '@app/rate-limiter'

@Global()
@Module({
  imports: [RateLimiterModule.forRoot({ requestsPerSecond: 30 }), ConfigModule],
  providers: [TelegramService],
  exports: [TelegramService],
})
export class TelegramModule {}
