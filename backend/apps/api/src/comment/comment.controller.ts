import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { ApiOkResponse, ApiQuery, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { CommentService } from './comment.service'
import { CommentModel } from './models/comment.model'
import { TelegramAuthGuard } from '@app/common/auth/telegram/auth-telegram.guard'
import { TelegramContextInterceptor } from '../auth/interceptors/telegram-context.interceptor'
import { CommentCreateDto } from './dto/comment-create.dto'
import { ApiOkArrayResponse, mapToArrayResponse, Serialize } from '@app/common'
import { CommentUpdateDto } from './dto/comment-update.dto'

@ApiTags('Comments')
@ApiSecurity('telegram-query')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOkArrayResponse(CommentModel)
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
    return mapToArrayResponse(await this.commentService.findAll({ limit, offset }), offset)
  }

  @ApiOkResponse({ type: CommentModel })
  @Serialize(CommentModel)
  @UseGuards(TelegramAuthGuard)
  @UseInterceptors(TelegramContextInterceptor)
  @Post()
  async createComment(@Body() dto: CommentCreateDto) {
    return await this.commentService.create({ data: dto })
  }

  @ApiOkResponse({ type: CommentModel })
  @Serialize(CommentModel)
  @UseGuards(TelegramAuthGuard)
  @UseInterceptors(TelegramContextInterceptor)
  @Put(':id')
  async updateComment(@Param('id') id: string, @Body() dto: CommentUpdateDto) {
    return await this.commentService.update({ id: id, data: dto })
  }
}
