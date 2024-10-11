import { ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import { UserModel } from './models/user.model'
import { ApiOkArrayResponse, mapToArrayResponse, Serialize, SerializeArray } from '@app/common'
import { Controller, Get, Param, UseInterceptors, UseGuards, Req } from '@nestjs/common'
import { TelegramContextInterceptor } from '../auth/interceptors/telegram-context.interceptor'
import { TelegramAuthGuard } from '@app/common/auth/telegram/auth-telegram.guard'
import { RequestWithTelegramContext } from '@app/common/controller/controller.model'
import { AssetModel } from '../asset/models/asset.model'
import { AssetService } from '../asset/asset.service'

@ApiTags('Users')
@ApiSecurity('telegram-query')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly assetService: AssetService,
  ) {}

  @ApiOkResponse({ type: UserModel })
  @Serialize(UserModel)
  @UseGuards(TelegramAuthGuard)
  @UseInterceptors(TelegramContextInterceptor)
  @Get('me')
  async getMe(@Req() req: RequestWithTelegramContext) {
    const telegramId = req.context.id

    return this.userService.findByTgId({ tgId: telegramId })
  }

  @ApiOkResponse({ type: UserModel })
  @Serialize(UserModel)
  @Get(':id')
  async findById(@Param('id') id: string) {
    await this.userService.assertUserExistsById(id)

    return this.userService.findById({ id })
  }

  @ApiOkArrayResponse(AssetModel)
  @Get(':id/asset')
  async getAssets(@Param('id') id: string) {
    return await mapToArrayResponse(await this.assetService.getAllByCreatorId({ creatorId: id }))
  }

  @ApiOkArrayResponse(UserModel)
  @SerializeArray(UserModel)
  @UseGuards(TelegramAuthGuard)
  @UseInterceptors(TelegramContextInterceptor)
  @Get(':id/referrals')
  async referrals(@Param('id') id: string) {
    await this.userService.assertUserExistsById(id)

    return mapToArrayResponse(await this.userService.referrals({ id }))
  }
}
