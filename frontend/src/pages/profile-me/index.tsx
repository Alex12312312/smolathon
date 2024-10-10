import { useTelegram } from '@/lib/telegram/telegramProvider.tsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useGetMe } from '@/hooks/user.hooks'

function ProfileMe() {
    const telegram = useTelegram()

    const { user, error, isLoading } = useGetMe(telegram.webApp?.initData ?? '')

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error occurred: {error.message}</div>
    }

    return (
        <div className="flex flex-col items-center">
            <div className="relative h-[110px] w-full overflow-hidden">
                <img
                    src={'data:image/jpeg;charset=utf-8;base64,' + user?.avatarUrl}
                    className="absolute h-full w-full scale-150 object-cover blur-lg"
                />
                <div className="absolute h-full w-full bg-black opacity-30"></div>
            </div>
            <div className="relative -mt-[55px]">
                <Avatar className="h-[110px] w-[110px] border-4 border-white">
                    <AvatarImage
                        src={'data:image/jpeg;charset=utf-8;base64,' + user?.avatarUrl}
                        alt="User Avatar"
                    />
                    <AvatarFallback className="bg-[#7f7f7f] text-xl text-gray-800">
                        CN
                    </AvatarFallback>
                </Avatar>
            </div>
            <div className="select-none p-2 text-xl font-semibold">{user?.firstName}</div>
        </div>
    )
}

export default ProfileMe
