import { useGetMe } from '../../hooks/user.hooks.getme.ts'
import { useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function ProfileMe() {
    const { user, error, isLoading } = useGetMe()

    useEffect(() => {
        if (user) {
            console.log('User data:', user)
        }
    }, [user])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error occurred: {error.message}</div>
    }

    return (
        <div>
            <div className="relative h-[110px] w-full overflow-hidden">
                <img
                    src={user?.avatarUrl}
                    className="absolute h-full w-full scale-150 object-cover blur-lg"
                />
                <div className="absolute h-full w-full bg-black opacity-30"></div>
            </div>
        </div>
    )
}

export default ProfileMe
