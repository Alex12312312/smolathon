import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { ApiOkResponse, ApiQuery, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { AssetService } from './asset.service'
import { AssetModel } from './models/asset.model'
import { ApiOkArrayResponse, mapToArrayResponse, Serialize } from '@app/common'
import { TelegramAuthGuard } from '@app/common/auth/telegram/auth-telegram.guard'
import { AssetCreateDto } from './dto/asset-create.dto'
import { TelegramContextInterceptor } from '../auth/interceptors/telegram-context.interceptor'
import { RequestWithTelegramContext } from '@app/common/controller/controller.model'

@ApiTags('Asset')
@ApiSecurity('telegram-query')
@Controller('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @ApiOkArrayResponse(AssetModel)
  @ApiQuery({
    name: 'limit',
    required: false,
  })
  @ApiQuery({
    name: 'offset',
    required: false,
  })
  @Get()
  async findAll(
    @Query('limit', new ParseIntPipe({ optional: true })) limit?: null,
    @Query('offset', new ParseIntPipe({ optional: true })) offset?: null,
  ) {
    return mapToArrayResponse(await this.assetService.findAll({ limit, offset }), offset)
  }

  @ApiOkResponse({ type: AssetModel })
  @Serialize(AssetModel)
  @UseGuards(TelegramAuthGuard)
  @UseInterceptors(TelegramContextInterceptor)
  @Post()
  async createAsset(@Body() dto: AssetCreateDto) {
    return await this.assetService.create({ data: dto })
  }

  @ApiOkResponse({ type: AssetModel })
  @Serialize(AssetModel)
  @UseGuards(TelegramAuthGuard)
  @UseInterceptors(TelegramContextInterceptor)
  @Post('/purchase/:id')
  async updateConsumer(@Param('id') id: string, @Req() req: RequestWithTelegramContext) {
    console.log(id, req.context.id)
    return await this.assetService.updateConsumer({ assetId: id, consumerId: req.context.id })
  }
}
