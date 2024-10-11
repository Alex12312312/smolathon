import { CategoryCard } from '../../components/categoryCard'
import category1 from '@/assets/category1.svg'
import category2 from '@/assets/category2.svg'
import category3 from '@/assets/category3.svg'
import category4 from '@/assets/category4.svg'
import { EventLine } from '@/components/eventLine/eventLine'
import { useState } from 'react'

export const MainPage = () => {
    const [currentPage, changePage] = useState("Каталог");
    return (
        <div className="flex h-full w-full flex-col justify-between">
            <div className='w-dvw overflow-hidden px-2 pt-7'>
            <div className="w-full flex flex-auto text-2xl overflow-x-scroll overflow-y-hidden gap-[15px] no-scrollbar">
            <div className={`w-fit select-none ${currentPage === "Каталог"? "font-bold dark:text-white text-black": 'text-gray-500'}`} onClick={() => {changePage("Каталог")}}>Каталог</div>
            <div className={`w-fit select-none ${currentPage === "Задания"? "font-bold dark:text-white text-black": 'text-gray-500'}`} onClick={() => {changePage("Задания")}}>Задания</div>
            <div className={`w-fit flex flex-nowrap select-none ${currentPage === "Мои работы"? "font-bold dark:text-white text-black" : 'text-gray-500'}`} onClick={() => {changePage("Мои работы")}}>Мои работы</div>
            </div>
            {currentPage === "Каталог"?
            <div className="mx-1 mt-3 flex-col gap-5">
                <div className="flex w-full flex-1 flex-grow flex-wrap items-stretch gap-2 self-stretch">
                    <CategoryCard
                        link="/feed"
                        className="w-[200px] flex-grow bg-[#925AFF]"
                        text="Герои и события"
                    >
                        <img src={category1} className="absolute bottom-0 right-0 h-[110px]" />
                    </CategoryCard>
                    <CategoryCard
                        className="flex-grow bg-[#009951]"
                        text="Мероприятия"
                        link="/feed"
                    >
                        <img src={category2} className="absolute bottom-0 right-0 h-[110px]" />
                    </CategoryCard>
                    <CategoryCard
                        link="/feed"
                        className="w-[150px] flex-grow bg-[#007AFF]"
                        text="Исторические объекты"
                    >
                        <img src={category3} className="absolute bottom-0 right-0 h-[110px]" />
                    </CategoryCard>
                    <CategoryCard
                        className="flex-grow bg-[#FDA43A]"
                        text="Цифровое искусство"
                        link="/feed"
                    >
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
                    <EventLine title="Event" picture="nothing" type="Спектакль" ></EventLine>
                    
                </div>
            </div>:""}
            </div> 
        </div>
    )
}
