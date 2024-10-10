import { Button } from '@/components/ui/button'
import { CategoryCard } from '../../components/categoryCard'
import { Group } from '../../components/group'
import category1 from '@/assets/category1.svg'
import category2 from '@/assets/category2.svg'
import category3 from '@/assets/category3.svg'
import category4 from '@/assets/category4.svg'
import { useTelegram } from '@/lib/telegram/telegramProvider'

export const MainPage = () => {
    return (
        <div className="flex h-full w-full flex-col justify-between">
            <Group name="Категории" className="m-4">
                <div className="flex w-full flex-1 flex-grow flex-wrap items-stretch gap-2 self-stretch">
                    <CategoryCard
                        className="w-[200px] flex-grow bg-[#925AFF]"
                        text="Герои и события"
                    >
                        <img src={category1} className="absolute bottom-0 right-0 h-[110px]" />
                    </CategoryCard>
                    <CategoryCard className="flex-grow bg-[#009951]" text="Мероприятия">
                        <img src={category2} className="absolute bottom-0 right-0 h-[110px]" />
                    </CategoryCard>
                    <CategoryCard
                        className="w-[150px] flex-grow bg-[#007AFF]"
                        text="Исторические объекты"
                    >
                        <img src={category3} className="absolute bottom-0 right-0 h-[110px]" />
                    </CategoryCard>
                    <CategoryCard className="flex-grow bg-[#FDA43A]" text="Цифровое искусство">
                        <img src={category4} className="absolute bottom-0 right-0 h-[110px]" />
                    </CategoryCard>
                </div>
            </Group>
            <Button className="m-4 border border-green-500 bg-transparent text-green-500">
                Перейти к заданиям
            </Button>
        </div>
    )
}
