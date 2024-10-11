import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export const TelegramAvatar = ({
    avatar,
    className,
}: {
    avatar?: string | null
    className?: string
}) => {
    return (
        <Avatar className={cn('h-[40px] w-[40px]', className)}>
            <AvatarImage src={'data:image/jpeg;charset=utf-8;base64,' + avatar} alt="User Avatar" />
            <AvatarFallback className="bg-item text-sm text-gray-800">😼</AvatarFallback>
        </Avatar>
    )
}
