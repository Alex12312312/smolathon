export type User = {
    id: string
    createdAt: Date
    updatedAt: Date
    avatarUrl: string
    telegramId: bigint
    firstName: string
    lastName: string | null
    telegramUsername: string | null
    wallet: string | null
}
