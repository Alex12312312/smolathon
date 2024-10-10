import { Injectable, InternalServerErrorException } from '@nestjs/common'
import axios from 'axios'
import { File, TelegramApiResponse, UserProfilePhotos } from './telegram.types'
import { LeakyBucketService } from '@app/rate-limiter'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TelegramService {
  private readonly telegramApiUrl
  private readonly telegramFileUrl

  constructor(
    private readonly rateLimiter: LeakyBucketService,
    private readonly config: ConfigService,
  ) {
    this.telegramApiUrl = `https://api.telegram.org/bot${this.config.getOrThrow<string>('TELEGRAM_BOT_TOKEN')}`
    this.telegramFileUrl = `https://api.telegram.org/file/bot${this.config.getOrThrow<string>('TELEGRAM_BOT_TOKEN')}`
  }

  private async telegramApiDownload(path: string) {
    const [error, result] = await this.rateLimiter.execute(async () => {
      try {
        const response = await axios.get(`${this.telegramFileUrl}/${path}`, {
          responseType: 'arraybuffer',
        })

        return Buffer.from(response.data)
      } catch (error) {
        throw new Error(`Error downloading file from Telegram API: ${error.message}`)
      }
    })

    if (error) {
      throw new InternalServerErrorException(error.message)
    }

    return result
  }

  private async telegramApi<TResult, TObj>(method: string, body: TObj) {
    const [error, result] = await this.rateLimiter.execute(async () => {
      try {
        const response = await axios.post<TelegramApiResponse<TResult>>(
          `${this.telegramApiUrl}/${method}`,
          body,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )

        if (!response.data.ok) {
          throw new Error(`Error in Telegram API response: ${method}`)
        }

        return response.data.result
      } catch (error) {
        throw new Error(`Error calling Telegram API method ${method}: ${error.message}`)
      }
    })

    if (error) {
      throw new InternalServerErrorException(error.message)
    }

    return result
  }

  private getUserProfilePhotos(telegramId: number) {
    return this.telegramApi<UserProfilePhotos, { user_id: number }>('getUserProfilePhotos', {
      user_id: telegramId,
    })
  }

  private getFile(fileId: string) {
    return this.telegramApi<File, { file_id: string }>('getFile', { file_id: fileId })
  }

  public async getUserAvatar(params: { telegramId: number }) {
    const { telegramId } = params

    const getUserPhotos = await this.getUserProfilePhotos(telegramId)

    const photos = getUserPhotos.photos

    const currentAvatarSizes = photos[0]

    // Если нет доступных аватарок, возвращаем null
    if (!currentAvatarSizes) {
      return null
    }

    // Получаем нужный размер аватарки, потому что телега отдает массив с массивом вариантов изображения
    const currentAvatar = currentAvatarSizes[Math.min(Math.max(currentAvatarSizes.length, 0), 1)]
    const currentAvatarId = currentAvatar?.file_id

    // Если нет доступного файла аватарки, возвращаем null
    if (!currentAvatarId) {
      return null
    }

    const getFile = await this.getFile(currentAvatarId)

    // Если нет доступного пути файла аватарки, возвращаем null
    const avatarPath = getFile.file_path
    if (!avatarPath) {
      return null
    }

    const avatarBuffer = await this.telegramApiDownload(avatarPath)

    return avatarBuffer
  }
}
