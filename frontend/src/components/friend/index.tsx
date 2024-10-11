import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TelegramAvatar } from '../telegramAvatar'

function Friend({
    name,
    username,
    avatar,
}: {
    name: string
    username?: string | null
    avatar: string
}) {
    return (
        <div className="flex flex-row gap-4">
            <TelegramAvatar avatar={avatar} />
            <div className="flex flex-col justify-evenly">
                <div className="text-base font-semibold">{name}</div>
                {username && <div className="text-sm font-normal">{username}</div>}
            </div>
        </div>
    )
}

export default Friend
