import { Group } from '@/components/group'
import { User } from '@/lib/api/types/user.types'
import { useParams } from 'react-router-dom'
import { Comment } from '@/components/comment'
import { TelegramAvatar } from '@/components/telegramAvatar'
import { Button } from '@/components/ui/button'
import { useGetAssetById } from '@/hooks/assets.hooks'
import { useUserGetById } from '@/hooks/user.hooks'

export const Asset = () => {
    const { id } = useParams()
    const { asset, isLoading } = useGetAssetById(id ?? '')

    if (isLoading) {
        return (
            <div className="flex h-[90vh] items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
        )
    }

    const { user, isLoading: authorIsLoading } = useUserGetById(asset?.creatorId ?? '')

    return (
        <div className="flex h-[93vh] w-full select-none overflow-x-hidden overflow-y-scroll">
            <div className="w-full flex-col justify-between overflow-y-scroll">
                <div className="flex flex-col gap-4 p-4">
                    <h1 className="text-3xl font-bold">{asset?.title}</h1>

                    <div className="h-[40vh] overflow-clip rounded-xl">
                        <img className="h-full w-full object-cover" src={asset?.image}></img>
                    </div>

                    <Button>Купить</Button>

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
                        <Comment text="Это просто охуенно" avatar={null}></Comment>
                    </Group>
                </div>
            </div>
        </div>
    )
}
