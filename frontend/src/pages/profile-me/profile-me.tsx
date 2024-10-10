import { useGetMe } from '../../hooks/user.hooks.getme.ts'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function ProfileMe() {
    const { user, error, isLoading } = useGetMe()

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
                    src={user?.avatarUrl}
                    className="absolute h-full w-full scale-150 object-cover blur-lg"
                />
                <div className="absolute h-full w-full bg-black opacity-30"></div>
            </div>
            <div className="relative -mt-[55px]">
                <Avatar className="h-[110px] w-[110px] border-4 border-white">
                    <AvatarImage src={user?.avatarUrl} alt="User Avatar" />
                    <AvatarFallback className="bg-[#7f7f7f] text-xl text-gray-800">CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="text-xl font-semibold p-2">lall</div>
        </div>
    )
}

export default ProfileMe
