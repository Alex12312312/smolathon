import { EventLine } from '@/components/eventLine/eventLine'
import smolensk from '../../assets/smolensk.png'
export const Poster = () => {
    return <div className="w-full h-full flex flex-col gap-3">
        <div className="w-full flex flex-row justify-between content-center gap-1">
        </div>
        <div className='flex flex-col gap-4'>
        <EventLine picture={smolensk} title='Смоленская башня' type='Спектакль'></EventLine>
        <EventLine picture={smolensk} title="Добрый кот" type="Мастер-класс"></EventLine>
        <EventLine picture={smolensk} title="Группа `Dabro`" type="Концерт"></EventLine>
        </div>
    </div>
}