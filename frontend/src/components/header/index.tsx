import { useState } from "react";
import { CategoryCard } from "../categoryCard";

export const Header = () => {
    const [currentPage, changePage] = useState("Каталог");
    const handleScreen = (path : string) => { changePage(path)}
    return <div>
        <div className="w-dvw flex flex-auto pt-7">
        <div className={`select-none ${currentPage === "Каталог"? '' : "font-bold"}`} onClick={() => {changePage("Каталог")}}>Каталог</div>
        <div className={`select-none ${currentPage === "Задания"? '' : "font-bold"}`} onClick={() => {changePage("Задания")}}>Задания</div>
        <div className={`select-none ${currentPage === "Мои работы"? '' : "font-bold"}`} onClick={() => {changePage("Мои работы")}}>Мои работы</div>
        </div>
        <div className="flex h-full w-full flex-col justify-between">
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
        </div>
    </div>
}