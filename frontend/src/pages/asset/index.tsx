import { Group } from '@/components/group'
import { useParams } from 'react-router-dom'
import { Comment } from '@/components/comment'
import { TelegramAvatar } from '@/components/telegramAvatar'
import { Button } from '@/components/ui/button'
import { useGetAssetById } from '@/hooks/assets.hooks'
import { useUserGetById } from '@/hooks/user.hooks'
import heart from '../../assets/heart.svg'
import { useState } from 'react'

export const Asset = () => {
    const { id } = useParams()
    const [liked, setLike] = useState(false)

    const { asset, isLoading: assetIsLoading } = useGetAssetById(id ?? '')
    const { user, isLoading: authorIsLoading } = useUserGetById(asset?.creatorId ?? '')

    if (assetIsLoading || authorIsLoading) {
        return (
            <div className="flex h-[90vh] items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
        )
    }

    return (
        <div className="flex h-[93vh] w-full select-none overflow-x-hidden overflow-y-scroll">
            <div className="w-full flex-col justify-between overflow-y-scroll">
                <div className="flex flex-col gap-4 p-4">
                    <h1 className="text-3xl font-bold">{asset?.title}</h1>

                    <div className="h-[40vh] overflow-clip rounded-xl">
                        <img className="h-full w-full object-cover" src={asset?.image}></img>
                    </div>

                    <div className="flex flex-row gap-4">
                        <Button className="w-full">Купить ({asset?.price ?? 0} SMOIIaTON)</Button>
                        <Button
                            variant={liked ? 'outline' : 'default'}
                            onClick={() => {
                                setLike(!liked)
                            }}
                        >
                            <img
                                src={heart}
                                style={{
                                    filter: liked
                                        ? 'invert(12%) sepia(97%) saturate(6734%) hue-rotate(355deg) brightness(118%) contrast(112%)'
                                        : undefined,
                                }}
                            ></img>
                        </Button>
                    </div>

                    <Group name="Автор">
                        <div className="flex w-full flex-row items-center gap-3">
                            <TelegramAvatar
                                className="h-12 w-12 text-3xl"
                                avatar={user?.avatarUrl}
                            />
                            <div className="text-[18px]">
                                {[user?.firstName, user?.lastName].join(' ')}
                            </div>
                        </div>
                    </Group>

                    <Group name="Описание">
                        <p className="max-w-full overflow-auto break-words">{asset?.description}</p>
                    </Group>

                    <Group name="Комментарии">
                        <Comment text="Здорово 🔥" avatar={null}></Comment>
                        <Comment text="Здорово 🔥" avatar={null}></Comment>
                        <Comment text="Здорово 🔥" avatar={null}></Comment>
                        <Comment text="Здорово 🔥" avatar={null}></Comment>
                    </Group>
                </div>
            </div>
        </div>
    )
}
