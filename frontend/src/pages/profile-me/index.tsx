import { useGetMe } from '../../hooks/user.hooks.getme.ts'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function ProfileMe() {
    const { user, error, isLoading } = useGetMe(
        'query_id=AAHNCQ4xAAAAAM0JDjGb8oR-&user=%7B%22id%22%3A823003597%2C%22first_name%22%3A%22%D1%80%D0%B8%D1%82%D0%B0%20%E0%B6%9E%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22rh0danthe%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1728587662&hash=12934a89a58005feaa9e1404d444883b7ea78c722e70f2b13c2a633065febf01',
    )

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
