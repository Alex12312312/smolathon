import { User } from './user.types'

export type Comment = {
    id: string

    createdAt: Date

    updatedAt: Date

    content: string

    creatorId: bigint

    assetId: string

    creator: User
}
