import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { UserService } from '../../user/user.service'
import { RequestWithTelegramContext } from '@app/common/controller/controller.model'

@Injectable()
export class TonWalletGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<RequestWithTelegramContext>()

    const tgUser = request.context

    if (!tgUser) return false

    const candidate = await this.userService.findByTgId({ tgId: tgUser.id })

    return !!candidate.wallet
  }
}
