import { ApiBearerAuth, ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import { UserModel } from './models/user.model'
import { Serialize } from '@app/common'
import { Controller, Get, Param, UseInterceptors, UseGuards, Req } from '@nestjs/common'
import { TelegramContextInterceptor } from '../auth/interceptors/telegram-context.interceptor'
import { TelegramAuthGuard } from '@app/common/auth/telegram/auth-telegram.guard'
import { RequestWithTelegramContext } from '@app/common/controller/controller.model'

@ApiTags('Users')
@ApiSecurity('telegram-query')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({ type: UserModel })
  @Serialize(UserModel)
  @UseGuards(TelegramAuthGuard)
  @UseInterceptors(TelegramContextInterceptor)
  @Get(':id')
  async findById(@Param('id') id: string) {
    await this.userService.assertUserExistsById(id)

    return this.userService.findById({ id })
  }

  @ApiOkResponse({ type: UserModel })
  @Serialize(UserModel)
  @UseGuards(TelegramAuthGuard)
  @UseInterceptors(TelegramContextInterceptor)
  @Get('me')
  async getMe(@Req() req: RequestWithTelegramContext) {
    const telegramId = req.context.id
    await this.userService.findByTgId({ tgId: telegramId })
  }
}
