import { Module, DynamicModule } from '@nestjs/common'
import { LeakyBucketService } from './leaky-bucket.service'
import { RateLimiterModuleParams } from './types/module.types'

@Module({})
export class RateLimiterModule {
  static forRoot(params: RateLimiterModuleParams): DynamicModule {
    return {
      module: RateLimiterModule,
      providers: [
        {
          provide: 'RATE_LIMIT_CONFIG',
          useValue: params,
        },
        LeakyBucketService,
      ],
      exports: [LeakyBucketService],
    }
  }
}
