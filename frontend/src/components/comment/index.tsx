import { TelegramAvatar } from '../telegramAvatar'

export const Comment = ({
    avatar,
    text,
    author,
}: {
    avatar: string | null
    text: string
    author: string
}) => {
    return (
        <div className="flex w-full flex-row items-center gap-2">
            <TelegramAvatar avatar={avatar} className="h-16 w-16" />
            <div className="flex h-full w-full flex-col gap-1 rounded-[12px] bg-item p-2 px-4">
                <div className="opacity-50">{author}</div>
                <div className="">{text}</div>
            </div>
        </div>
    )
}
