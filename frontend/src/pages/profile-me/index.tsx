import { useTelegram } from '@/lib/telegram/telegramProvider.tsx'
import { Avatar, AvatarFallback} from '@/components/ui/avatar'
import { useGetMe } from '@/hooks/user.hooks'

function ProfileMe() {
    const telegram = useTelegram()

    const {error, isLoading } = useGetMe(telegram.webApp?.initData ?? '')

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error occurred: {error.message}</div>
    }

    return (
        <div className="flex flex-col items-center">
            <div className="relative h-[110px] w-full overflow-hidden">
                
                <div className="absolute h-full w-full bg-black opacity-30"></div>
            </div>
            <div className="relative -mt-[55px]">
                <Avatar className="h-[110px] w-[110px] border-4 border-white">
                    
                    <AvatarFallback className="bg-[#7f7f7f] text-xl text-gray-800">
                        CN
                    </AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default ProfileMe
