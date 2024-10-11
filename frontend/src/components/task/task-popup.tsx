import cross from '@/assets/close.svg'
import { Button } from '../ui/button'

interface TaskPopupProps {
    onClose: () => void; 
}

function TaskPopup({ onClose }: TaskPopupProps ) {
    return (
        <div className="fixed w-full h-[70vh] bottom-16 left-0 bg-transparent flex justify-center items-stretch ">
            <div className="flex flex-col justify-between bg-popup w-full px-12 pb-12 pt-6 relative">
                <div className='flex flex-row justify-end items-center gap-[43vw]'>
                    <div className="text-base font-semibold">Задание</div>
                    <img src={cross} onClick={onClose} className="cursor-pointer" />
                </div>
                <div className="text-sm font-medium mt-2">
                    Экспозиция «Прошлое Смоленска через призму стекла»: порядка 600 предметов из стекла
                    XVIII–XIX веков, большинство из которых были найдены в Смоленске или на территории
                    Смоленской области.
                </div>
                <div className="text-sm font-medium mt-2">
                    Найди QR-code среди экспонатов и перейди по нему для получения баллов!
                </div>
                <Button className='text-sm bg-[#14AE5C] mt-4'>Подтвердить</Button>
            </div>
        </div>
    );
}

export default TaskPopup;
