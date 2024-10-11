import { useTelegram } from '@/lib/telegram/telegramProvider.tsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button.tsx'
import { TonConnectButton } from '@tonconnect/ui-react'
import Friend from '@/components/friend/friend.tsx'
import coin from '@/assets/coin.svg'
import { useGetMe } from '@/hooks/assets.hooks.getme'

function ProfileMe() {
    const telegram = useTelegram()
    //const { user, error, isLoading } = useGetMe(telegram.webApp?.initData ?? '')
/*
    if (isLoading) {
       return (
            <div className="flex items-center justify-center h-[90vh]">
                <div className="animate-spin h-10 w-10 border-4 border-t-transparent border-blue-500 rounded-full"></div>
            </div>
        )
    }

    if (error) {
        return <div>Error occurred: {error.message}</div>
    }
*/
    return (
        <div className="flex h-[90vh] w-full select-none overflow-x-hidden overflow-y-scroll">
            <div className="w-full flex-col justify-between overflow-y-scroll pb-5">
                <div className="relative h-[110px] w-full overflow-hidden">
                    
                    <div className="absolute h-full w-full bg-black opacity-30"></div>
                </div>

                <div className="relative mt-8 flex flex-col items-center">
                    <div className="absolute top-[-75px]">
                        <Avatar className="h-[110px] w-[110px] border-4 border-white">
                            
                            <AvatarFallback className="bg-[#7f7f7f] text-xl text-gray-800">
                                CN
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="mt-[55px] select-none p-2 text-xl font-semibold">
                        {telegram.user?.first_name}
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
                    <Button className="my-4 bg-[#14AE5C] text-base font-bold text-white  hover:scale-[1.01] active:scale-[0.99]">
                        Пригласить друга
                    </Button>
                    <div className="flex flex-col items-start justify-between">
                        <div className="text-lg font-bold">Приглашенные друзья</div>
                        <div className="pt-4 flex gap-2 flex-col">
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
