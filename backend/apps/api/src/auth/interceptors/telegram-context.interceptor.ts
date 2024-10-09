import { RequestWithTelegramContext } from '@app/common/controller/controller.model'
import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from '@nestjs/common'
import { Observable } from 'rxjs'
import { UserService } from '../../user/user.service'

export class TelegramContextInterceptor implements NestInterceptor {
  constructor(private readonly userService: UserService) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest<RequestWithTelegramContext>()

    this.userService.createOrUpdate({ data: request.context })

    return next.handle()
  }
}
