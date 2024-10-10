import { RequestWithTelegramContext } from '@app/common/controller/controller.model'
import { UserModel } from '../user/models/user.model'

export type ReqWithTelegramContextAndUser = RequestWithTelegramContext & { user: UserModel }
