import { Group } from '@/components/group'
import { User } from '@/lib/api/types/user.types'
import { useParams } from 'react-router-dom'
import { Comment } from '@/components/comment'
import { TelegramAvatar } from '@/components/telegramAvatar'
import { Button } from '@/components/ui/button'

export const Asset = ({
    title,
    description,
    imageSrc,
    author,
}: {
    title: string
    description: string
    imageSrc: string
    author: User
}) => {
    const { id } = useParams()

    return (
        <div className="flex h-[93vh] w-full select-none overflow-x-hidden overflow-y-scroll">
            <div className="w-full flex-col justify-between overflow-y-scroll">
                <div className="flex flex-col gap-4 p-4">
                    <h1 className="text-3xl font-bold">{title ?? 'Кот негр'}</h1>

                    <div className="h-[40vh] overflow-clip rounded-xl">
                        <img
                            className="h-full w-full object-cover"
                            src={
                                'https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg'
                            }
                        ></img>
                    </div>

                    <Button>Купить</Button>

                    <Group name="Автор">
                        <div className="flex w-full flex-row items-center gap-3">
                            <TelegramAvatar className="h-12 w-12 text-3xl" />
                            <div className="text-[18px]">Крутой мужик</div>
                        </div>
                    </Group>

                    <Group name="Описание">
                        <p className="max-w-full overflow-auto break-words">
                            aksjflafjasklfjakfjaslkfjaslkfjaslkfjaslkfjaslkfjaslkfjasfiasjfsafjlkasjfaslfjaslfjaslkfjakfaslkfjaslkfjaslkfasjlkfasjlkfajsfajslkfjaklfsjaslkf
                        </p>
                    </Group>

                    <Group name="Комментарии">
                        <Comment text="Это просто охуенно" avatar={null}></Comment>
                    </Group>
                </div>
            </div>
        </div>
    )
}
