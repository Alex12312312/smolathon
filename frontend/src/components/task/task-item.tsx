import coin from '@/assets/coin.svg'
import { Button } from '../ui/button'
import { useState } from 'react'
import TaskPopup from './task-popup'
function TaskItem() {
    const [isPopupOpen, setPopupOpen] = useState(false)

    const handleOpenPopup = () => {
        setPopupOpen(true)
    }

    const handleClosePopup = () => {
        setPopupOpen(false)
    }

    return (
        <div>
            <div className="flex flex-row justify-between gap-4">
                <div className="flex flex-col justify-between gap-4">
                    <div className="text-base">«Смоленск через призму стекла»</div>
                    <div className="flex flex-row items-center gap-2">
                        <div className="text-sm font-medium text-[#FAA629]"> +1000</div>
                        <img src={coin} />
                    </div>
                </div>
                <Button
                    onClick={handleOpenPopup}
                    className="self-center border-2 border-gray-500 bg-transparent text-sm text-gray-500"
                >
                    Выполнить
                </Button>
            </div>

            {isPopupOpen && <TaskPopup onClose={handleClosePopup} />}
        </div>
    )
}

export default TaskItem
