import { NotFoundException } from '@nestjs/common'

export class UserNotFoundException extends NotFoundException {
  constructor(userId: string) {
    super(`User with ${userId} not found.`)
  }
}
