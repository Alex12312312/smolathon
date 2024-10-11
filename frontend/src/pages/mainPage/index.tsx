import { CategoryCard } from '../../components/categoryCard'
import category1 from '@/assets/category1.svg'
import category2 from '@/assets/category2.svg'
import category3 from '@/assets/category3.svg'
import category4 from '@/assets/category4.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const MainPage = () => {
    const navigator = useNavigate();
    const [currentPage, changePage] = useState('Каталог')
    return (
        <div className="flex h-full w-full flex-col justify-between">
            <div className="w-dvw overflow-hidden px-2 pt-7">
                <div className="no-scrollbar flex w-full flex-auto gap-[15px] overflow-y-hidden overflow-x-scroll text-2xl">
                    <div
                        className={`w-fit select-none ${currentPage === 'Каталог' ? 'font-bold text-black dark:text-white' : 'text-[#707070]'}`}
                        onClick={() => {
                            changePage('Каталог')
                        }}
                    >
                        Каталог
                    </div>
                    <div
                        className={`w-fit select-none ${currentPage === 'Задания' ? 'font-bold text-black dark:text-white' : 'text-[#707070]'}`}
                        onClick={() => {
                            changePage('Задания')
                        }}
                    >
                        Задания
                    </div>
                    <div
                        className={`flex w-fit select-none flex-nowrap ${currentPage === 'Мои работы' ? 'font-bold text-black dark:text-white' : 'text-[#707070]'}`}
                        onClick={() => {
                            changePage('Мои работы')
                        }}
                    >
                        Мои работы
                    </div>
                </div>
                {currentPage === 'Каталог' ? (
                    <div className="mx-1 mt-3 flex-col gap-5">
                        <div className="flex w-full flex-1 flex-grow flex-wrap items-stretch gap-2 self-stretch">
                            <CategoryCard
                                link="/feed?category=HeroesAndEvents"
                                className="w-[200px] flex-grow bg-[#925AFF]"
                                text="Герои и события"
                            >
                                <img
                                    src={category1}
                                    className="absolute bottom-0 right-0 h-[110px]"
                                />
                            </CategoryCard>
                            <CategoryCard
                                className="flex-grow bg-[#009951]"
                                text="Мероприятия"
                                link="/feed?category=Activity"
                            >
                                <img
                                    src={category2}
                                    className="absolute bottom-0 right-0 h-[110px]"
                                />
                            </CategoryCard>
                            <CategoryCard
                                link="/feed?category=HistoricalSites"
                                className="w-[150px] flex-grow bg-[#007AFF]"
                                text="Исторические объекты"
                            >
                                <img
                                    src={category3}
                                    className="absolute bottom-0 right-0 h-[110px]"
                                />
                            </CategoryCard>
                            <CategoryCard
                                className="flex-grow bg-[#FDA43A]"
                                text="Цифровое искусство"
                                link="/feed?category=DigitalArt"
                            >
                                <img
                                    src={category4}
                                    className="absolute bottom-0 right-0 h-[110px]"
                                />
                            </CategoryCard>
                            <button onClick={()=>{navigator("/poster")}}>Переход на афишу</button>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {currentPage === 'Задания' ? (
                    <div className="m-4 flex-col gap-5">
                        <div className="flex w-full flex-1 flex-grow flex-wrap items-stretch gap-2 self-stretch">
                            <CategoryCard
                                className="w-[200px] flex-grow bg-[#925AFF]"
                                text="Герои и события"
                            >
                                <img
                                    src={category1}
                                    className="absolute bottom-0 right-0 h-[110px]"
                                />
                            </CategoryCard>
                            <CategoryCard className="flex-grow bg-[#009951]" text="Мероприятия">
                                <img
                                    src={category2}
                                    className="absolute bottom-0 right-0 h-[110px]"
                                />
                            </CategoryCard>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {currentPage === 'Мои работы' ? (
                    <div className="m-4 flex-col gap-5">
                        <div className="flex w-full flex-1 flex-grow flex-wrap items-stretch gap-2 self-stretch">
                            <CategoryCard
                                className="w-[200px] flex-grow bg-[#925AFF]"
                                text="Герои и события"
                            >
                                <img
                                    src={category1}
                                    className="absolute bottom-0 right-0 h-[110px]"
                                />
                            </CategoryCard>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
            </div> 
    )
}
