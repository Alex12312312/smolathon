import { Injectable } from '@nestjs/common'
import { TelegramService } from '../telegram/telegram.service'

@Injectable()
export class AvatarService {
  constructor(private readonly telegramService: TelegramService) {}

  public async getAvatarByTelegramId(params: { telegramId: number }): Promise<string | null> {
    const { telegramId } = params

    const tgAvatarBuffer = await this.telegramService.getUserAvatar({ telegramId })

    return tgAvatarBuffer.toString('base64')
  }
}
