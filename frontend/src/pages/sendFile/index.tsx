import { ChangeEvent, useState } from "react"

export const SendFile = () => {
    /*const [files, setFile] = useState<File>();
    function handleChange (e: ChangeEvent<HTMLInputElement>){
        if(e.target.files){
        setFile(e.target.files[0])
        }
    }

    const Sendfile = () => {

    }
    */
    return <div className="w-dvh h-full flex flex-col justify-between gap-28">
        <div className="w-full h-fit flex flex-col mt-16 px-2 gap-4">
            <div className="w-full text-lg font-bold pl-4">
                Текст поста
            </div>
            <input className="w-full " placeholder="Напишите текст вашего поста"></input>
            <div className="w-full flex flex-row justify-between pl-4 ">
                <div className="text-lg font-bold">Загрузка файлов</div>
                <div className="text-base text-gray-500 font-medium">Max 5MB</div>
            </div>
            <input type="file" /* onChange={handleChange}*/></input>
            <div className="w-full text-lg font-bold pl-4">
                Категория
            </div>
            <select>
                <option value="DigitalArt">Цифровое искусство</option>
                <option value="Activity">Мероприятия</option>
                <option value="HeroesAndEvents">Герои и события</option>
                <option value="HistoricalSites">Исторические объекты</option>
            </select>
            <div className="text-base text-gray-500 pl-4">Творчесво, созданное с использованием цифровых технологий</div>
        </div>
        <button className="w-full bg-green-500" onClick={() => {}}>Опубликовать</button>
    </div>
}