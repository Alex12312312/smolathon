import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { init } from '@paralleldrive/cuid2'
import { PrismaModule } from '@app/db'

@Module({
  exports: [UserService],
  imports: [PrismaModule],
  providers: [
    UserService,
    {
      provide: 'USER_ID',
      useValue: init({ length: 16 }),
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
