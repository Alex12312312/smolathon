import { EventLine } from '@/components/eventLine/eventLine'
import Letter from '../../assets/letter.svg'
export const Poster = () => {
    return <div className="w-full h-full flex flex-col gap-3">
        <div className="w-full flex flex-row justify-between content-center">
            <div className="text-xl p-4 font-bold">Афиша</div>
            <div className='rounded flex w-[40%] p-4 border gap-1 mt-2 mr-2'>
            <img src={Letter}></img>
            <div className=''> Pick a date </div>
            </div>
        </div>
        <EventLine picture={Letter} title='Смоленская башня' type='Спектакль'></EventLine>
        <EventLine picture={Letter} title="Добрый кот" type="Мастер-класс"></EventLine>
        <EventLine picture={Letter} title="Группа `Dabro`" type="Концерт"></EventLine>
    </div>
}