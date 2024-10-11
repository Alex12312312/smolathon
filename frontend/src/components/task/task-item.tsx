import coin from '@/assets/coin.svg'
import { Button } from '../ui/button'
function TaskItem() {
    return (
        <div className="flex flex-row justify-between gap-4">
            <div className="flex flex-col justify-between gap-4">
                <div className="text-base">«Смоленск через призму стекла»</div>
                <div className="flex flex-row items-center gap-2">
                    <div className="text-sm font-medium text-[#FAA629]"> +1000</div>
                    <img src={coin} />
                </div>
            </div>
            <Button className="self-center border-2 border-[#707070] bg-transparent text-sm text-[#707070]">
                Выполнить
            </Button>
        </div>
    )
}

export default TaskItem
