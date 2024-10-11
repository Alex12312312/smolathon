import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
            <Avatar className="h-[40px] w-[40px]">
                <AvatarImage
                    src={'data:image/jpeg;charset=utf-8;base64,' + avatar}
                    alt="User Avatar"
                />
                <AvatarFallback className="bg-item text-sm text-gray-800">😼</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-evenly">
                <div className="text-base font-semibold">{name}</div>
                {username && <div className="text-sm font-normal">{username}</div>}
            </div>
        </div>
    )
}

export default Friend
