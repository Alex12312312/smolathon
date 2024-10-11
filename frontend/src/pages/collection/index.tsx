import { FeedItem } from '@/components/feedItem'
import { Group } from '@/components/group'
import { useGetAssetsByUserId } from '@/hooks/assets.hooks'
import { useUserGetMe } from '@/hooks/user.hooks'
import { useTelegram } from '@/lib/telegram/telegramProvider'

export const Collection = () => {
    const telegram = useTelegram()

    const { user, isLoading: userIsLoading } = useUserGetMe(telegram.webApp?.initData ?? '')
    const { asset, isLoading: assetIsLoading } = useGetAssetsByUserId(user?.id ?? '')

    if (assetIsLoading || userIsLoading) {
        return (
            <div className="flex h-[90vh] items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
        )
    }

    return (
        <>
            <Group
                className="mt-3 flex h-[90vh] select-none overflow-x-hidden overflow-y-scroll overscroll-none p-3"
                name="Моя коллекция"
            >
                <div className="flex flex-grow flex-wrap justify-center gap-3">
                    <div className="flex flex-wrap gap-4">
                        {asset && asset.length > 0 ? (
                            asset?.map((feedItem) => (
                                <FeedItem
                                    id={feedItem.id}
                                    key={feedItem.id}
                                    title={feedItem.title}
                                    imageSrc={feedItem.image}
                                    description={feedItem.description}
                                />
                            ))
                        ) : (
                            <p className="text-[#707070]">Приобретите работу и найдите ее здесь!</p>
                        )}
                    </div>
                </div>
            </Group>
        </>
    )
}
