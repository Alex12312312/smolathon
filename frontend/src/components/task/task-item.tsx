import coin from '@/assets/coin.svg'
import { Button } from '../ui/button'
function TaskItem() {
    return (
        <div className="flex flex-row justify-between gap-4">
            <div className='flex flex-col justify-between gap-4'>
                <div className='text-base'>«Смоленск через призму стекла»</div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='text-[#FAA629] text-sm font-medium'> +1000</div>
                    <img src={coin} />
                </div>
            </div>
            <Button className='text-sm text-gray-500 border-2 border-gray-500 self-center bg-transparent'>Выполнить</Button>
        </div>
    )
}

export default TaskItem
