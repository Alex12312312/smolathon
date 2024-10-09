import { Injectable } from '@nestjs/common'
import { AuthDataValidator, urlStrToAuthDataMap } from '@telegram-auth/server'

@Injectable()
export class TelegramAuthService {
  private readonly _validator: AuthDataValidator

  constructor() {
    this._validator = new AuthDataValidator({
      botToken: process.env.BOT_TOKEN,
    })
  }

  get validator(): Readonly<AuthDataValidator> {
    return Object.freeze(this._validator)
  }

  getQueryMap(query: string): Map<string, string> {
    return urlStrToAuthDataMap(`http://localhost?${query}`)
  }
}
