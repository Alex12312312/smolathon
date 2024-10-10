import { CategoryCard } from '../../components/ui/categoryCard/categoryCard'
import { Group } from '../../components/ui/group/group'

export const MainPage = () => {
    return (
        <>
            <Group name="Категории">
                <div className="flex w-full flex-1 flex-grow flex-wrap items-stretch gap-2 self-stretch">
                    <CategoryCard
                        className="w-[200px] flex-grow bg-red-600"
                        text="Text"
                        imageSrc="https://avatars.mds.yandex.net/i?id=46500a898df3ace1c372768ac44af342_l-8177627-images-thumbs&n=13"
                    ></CategoryCard>
                    <CategoryCard
                        className="flex-grow bg-red-600"
                        text="Text"
                        imageSrc="https://avatars.mds.yandex.net/i?id=46500a898df3ace1c372768ac44af342_l-8177627-images-thumbs&n=13"
                    ></CategoryCard>
                    <CategoryCard
                        className="flex-grow bg-red-600"
                        text="Text2"
                        imageSrc="https://avatars.mds.yandex.net/i?id=46500a898df3ace1c372768ac44af342_l-8177627-images-thumbs&n=13"
                    ></CategoryCard>
                    <CategoryCard
                        className="flex-grow"
                        text="Text3"
                        imageSrc="https://avatars.mds.yandex.net/i?id=46500a898df3ace1c372768ac44af342_l-8177627-images-thumbs&n=13"
                    ></CategoryCard>
                </div>
            </Group>
        </>
    )
}
