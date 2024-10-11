import coin from '@/assets/coin.svg'
import { Button } from '../ui/button'
import { useState } from 'react';
import TaskPopup from './task-popup';
function TaskItem() {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div>
            <div className="flex flex-row justify-between gap-4">
                <div className='flex flex-col justify-between gap-4'>
                    <div className='text-base'>«Смоленск через призму стекла»</div>
                    <div className='flex flex-row gap-2 items-center'>
                        <div className='text-[#FAA629] text-sm font-medium'> +1000</div>
                        <img src={coin} />
                    </div>
                </div>
                <Button onClick={handleOpenPopup} className='text-sm text-gray-500 border-2 border-gray-500 self-center bg-transparent'>
                    Выполнить
                </Button>
            </div>

            {isPopupOpen && <TaskPopup onClose={handleClosePopup} />}
        </div>
    );
}

export default TaskItem
