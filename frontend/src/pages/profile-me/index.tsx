import { useTelegram } from '@/lib/telegram/telegramProvider.tsx'
//import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button.tsx'
import { TonConnectButton } from '@tonconnect/ui-react'
import Friend from '@/components/friend'
import coin from '@/assets/coin.svg'
import { useGetUserReferrals, useUserGetMe } from '@/hooks/user.hooks'
import { TelegramAvatar } from '@/components/telegramAvatar'
import { telegramForwardUrl } from '@/lib/utils'

function ProfileMe() {
    const telegram = useTelegram()
    const {
        user,
        error: userError,
        isLoading: userIsLoading,
    } = useUserGetMe(telegram.webApp?.initData ?? '')

    const {
        referrals,
        //error: referralsError,
        //isLoading: referralsIsLoading,
    } = useGetUserReferrals(telegram.webApp?.initData ?? '', { id: user?.id ?? '' })

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

                <div className="relative mt-8 flex flex-col items-center gap-2">
                    <div className="absolute top-[-75px]">
                        <TelegramAvatar
                            avatar={user?.avatarUrl}
                            className="h-[110px] w-[110px] border-4 border-item"
                        />
                    </div>
                    <div className="mt-[30px] select-none p-2 text-xl font-semibold">
                        {user?.firstName}
                    </div>
                </div>

                <div className="mt-4 flex w-full flex-grow flex-col justify-evenly px-4">
                    <div className="flex flex-col gap-2 border-y border-item py-3">
                        <div className="text-2xl font-medium">Мой кошелек</div>
                        <div className="text-sm text-[#707579]">Ваш баланс</div>
                        <div className="flex flex-row gap-4 content-center">
                            <img src={coin} />
                            <div className="-translate-y-[1px]">
                                <div className="flex flex-row gap-3 text-2xl">
                                    <span className="text-bold text-2xl">{user?.balance ?? 0}</span>{' '}
                                    SMOIIaTON
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-center pt-7">
                        <TonConnectButton className="w-[300px] rounded-sm text-black" />
                    </div>
                    <Button
                        className="my-4 bg-[#14AE5C] text-base font-bold text-white hover:scale-[1.01] active:scale-[0.99]"
                        onClick={() => {
                            telegram.webApp?.openTelegramLink(
                                telegramForwardUrl(
                                    'Приходи в Цифровой город! Участвуй и зарабатывай! 😼',
                                    user?.id,
                                ),
                            )
                        }}
                    >
                        Пригласить друга
                    </Button>
                    <div className="flex flex-col items-start justify-between">
                        <div className="text-lg font-bold">Приглашенные друзья</div>
                        <div className="flex flex-col gap-2 pt-4">
                            {referrals && referrals?.length > 0 ? (
                                referrals?.map((referral) => (
                                    <Friend
                                        name={[referral.firstName, referral.lastName].join(' ')}
                                        username={referral.telegramUsername}
                                        avatar={referral.avatarUrl}
                                    ></Friend>
                                ))
                            ) : (
                                <p className="text-gray-600">
                                    Пригласите друга и получите 100 монет!
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMe
