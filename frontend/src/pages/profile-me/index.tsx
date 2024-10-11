import { useTelegram } from '@/lib/telegram/telegramProvider.tsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button.tsx'
import { TonConnectButton } from '@tonconnect/ui-react'
import Friend from '@/components/friend/friend.tsx'
import coin from '@/assets/coin.svg'
import { useUserGetMe } from '@/hooks/user.hooks'

function ProfileMe() {
    const telegram = useTelegram()
    const {
        user,
        error: userError,
        isLoading: userIsLoading,
    } = useUserGetMe(telegram.webApp?.initData ?? '')
    /*const {
        referrals,
        error: referralsError,
        isLoading: referralsIsLoading,
    } = useGetUserReferrals(telegram.webApp?.initData ?? '')
*/
    if (userIsLoading) {
        return (
            <div className="flex h-[90vh] items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
        )
    }

    if (userError) {
        return <div>Error occurred: {userError.message}</div>
    }

    return (
        <div className="flex h-[90vh] w-full select-none overflow-x-hidden overflow-y-scroll">
            <div className="w-full flex-col justify-between overflow-y-scroll pb-5">
                <div className="relative h-[110px] w-full overflow-hidden">
                    <img
                        src={'data:image/jpeg;charset=utf-8;base64,' + user?.avatarUrl}
                        className="absolute h-full w-full scale-150 object-cover blur-lg"
                    />
                    <div className="absolute h-full w-full bg-black opacity-30"></div>
                </div>

                <div className="relative mt-8 flex flex-col items-center">
                    <div className="absolute top-[-75px]">
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
                    <div className="mt-[55px] select-none p-2 text-xl font-semibold">
                        {user?.firstName}
                    </div>
                </div>

                <div className="mt-4 flex w-full flex-grow flex-col justify-evenly px-4">
                    <div className="flex flex-col gap-2 border-y border-gray-200 py-3">
                        <div className="text-2xl font-medium">Мой кошелек</div>
                        <div className="text-sm text-[#707579]">Ваш баланс</div>
                        <div className="flex flex-row gap-4">
                            <img src={coin} />
                            <div>3.12412</div>
                            <div>SMOIIaTON</div>
                        </div>
                    </div>
                    <div className="self-center pt-7">
                        <TonConnectButton className="w-[300px] rounded-sm text-black" />
                    </div>
                    <Button className="my-4 bg-[#14AE5C] text-base font-bold text-white hover:scale-[1.01] active:scale-[0.99]">
                        Пригласить друга
                    </Button>
                    <div className="flex flex-col items-start justify-between">
                        <div className="text-lg font-bold">Приглашенные друзья</div>
                        <div className="flex flex-col gap-2 pt-4">
                            <Friend />
                            <Friend />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMe
