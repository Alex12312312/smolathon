import { TelegramAvatar } from '../telegramAvatar'

export const Comment = ({ avatar, text }: { avatar: string | null; text: string }) => {
    return (
        <div className="flex w-full flex-row items-center gap-2">
            <TelegramAvatar avatar={avatar} className="h-12 w-12" />
            <div className="h-full rounded-[12px] bg-item p-4">{text}</div>
        </div>
    )
}
