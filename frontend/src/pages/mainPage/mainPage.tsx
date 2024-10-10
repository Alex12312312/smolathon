import { Button } from '@/components/ui/button'
import { CategoryCard } from '../../components/ui/categoryCard/categoryCard'
import { Group } from '../../components/ui/group/group'
import category1 from '@/assets/category1.svg'
import category2 from '@/assets/category2.svg'
import category3 from '@/assets/category3.svg'
import category4 from '@/assets/category4.svg'

export const MainPage = () => {
    return (
            <div className="h-full w-full flex flex-col justify-between">
                <Group name="Категории" className="m-4">
                    <div className="flex w-full flex-1 flex-grow flex-wrap items-stretch gap-2 self-stretch">
                        <CategoryCard
                            className="w-[200px] flex-grow bg-[#925AFF]"
                            text="Герои и события"
                            //imageSrc="https://avatars.mds.yandex.net/i?id=46500a898df3ace1c372768ac44af342_l-8177627-images-thumbs&n=13"
                        >
                            <img src={category1} className="absolute bottom-0 right-0 h-[110px]" />
                        </CategoryCard>
                        <CategoryCard
                            className="flex-grow bg-[#009951]"
                            text="Мероприятия"
                            //imageSrc="https://avatars.mds.yandex.net/i?id=46500a898df3ace1c372768ac44af342_l-8177627-images-thumbs&n=13"
                        >
                            <img src={category2} className="absolute bottom-0 right-0 h-[110px]" />
                        </CategoryCard>
                        <CategoryCard
                            className="w-[150px] flex-grow bg-[#007AFF]"
                            text="Исторические объекты"
                            //imageSrc="https://avatars.mds.yandex.net/i?id=46500a898df3ace1c372768ac44af342_l-8177627-images-thumbs&n=13"
                        >
                            <img src={category3} className="absolute bottom-0 right-0 h-[110px]" />
                        </CategoryCard>
                        <CategoryCard className="flex-grow bg-[#FDA43A]" text="Цифровое искусство">
                            <img src={category4} className="absolute bottom-0 right-0 h-[110px]" />
                        </CategoryCard>
                    </div>
                </Group>
                <Button className="m-4 bg-white border text-green-500 border-green-500">Перейти к заданиям</Button>
            </div>
    )
}
