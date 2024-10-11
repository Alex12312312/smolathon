import { Button } from '@/components/ui/button'
import { CategoryCard } from '../../components/categoryCard'
import category1 from '@/assets/category1.svg'
import category2 from '@/assets/category2.svg'
import category3 from '@/assets/category3.svg'
import category4 from '@/assets/category4.svg'
import { useState } from 'react'

export const MainPage = () => {
    const [currentPage, changePage] = useState("Каталог");
    return (
        <div className="flex h-full w-full flex-col justify-between">
            <div className='w-dvw overflow-hidden px-7 pt-7'>
            <div className="w-full flex flex-auto text-3xl overflow-x-scroll overflow-y-hidden gap-[15px] no-scrollbar">
            <div className={`w-fit select-none ${currentPage === "Каталог"? "font-bold": ''}`} onClick={() => {changePage("Каталог")}}>Каталог</div>
            <div className={`w-fit select-none ${currentPage === "Задания"? "font-bold": ''}`} onClick={() => {changePage("Задания")}}>Задания</div>
            <div className={`w-fit select-none ${currentPage === "Мои работы"? "font-bold" : ''}`} onClick={() => {changePage("Мои работы")}}>Мои работы</div>
            </div>
            {currentPage === "Каталог"?
            <div className="m-4 flex-col gap-5">
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
            </div>:""}
            {currentPage === "Задания"?
            <div className="m-4 flex-col gap-5">
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
                </div>
            </div>:""}
            {currentPage === "Мои работы"?
            <div className="m-4 flex-col gap-5">
                <div className="flex w-full flex-1 flex-grow flex-wrap items-stretch gap-2 self-stretch">
                    <CategoryCard
                        className="w-[200px] flex-grow bg-[#925AFF]"
                        text="Герои и события"
                    >
                        <img src={category1} className="absolute bottom-0 right-0 h-[110px]" />
                    </CategoryCard>
                    
                </div>
            </div>:""}
            </div> 
        </div>
    )
}
