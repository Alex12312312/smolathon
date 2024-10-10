import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { UserService } from '../../user/user.service'
import { ReqWithTelegramContextAndUser } from '../auth.types'

@Injectable()
export class TelegramContextInterceptor implements NestInterceptor {
  constructor(private readonly userService: UserService) {}
  async intercept(context: ExecutionContext, next: CallHandler<any>) {
    const request = context.switchToHttp().getRequest<ReqWithTelegramContextAndUser>()

    request.user = await this.userService.createOrUpdate({ data: request.context })

    const tonWalletHeader = request.header('X-TonWallet')

    if (tonWalletHeader && tonWalletHeader !== 'null') {
      this.userService.updateWallet({
        telegramId: request.context.id,
        wallet: tonWalletHeader,
      })
    }

    return next.handle()
  }
}
