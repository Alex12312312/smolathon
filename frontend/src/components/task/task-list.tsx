import { Accordion, AccordionItem } from '@/components/ui/accordion'
import TaskItem from './task-item'


function TaskList() {
    return (
        <div className='px-4 overflow-y-scroll w-full'>
            <Accordion type="single" collapsible={false} className="divide-y divide-gray-200 overflow-y-scroll">
                <AccordionItem value="item-1" className="py-2">
                    <TaskItem title="Смоленск через призму стекла"/>
                </AccordionItem>
                <AccordionItem value="item-2" className="py-2">
                <TaskItem title="Изучи смоленские достопримечательности"/>
                </AccordionItem>
                <AccordionItem value="item-3" className="py-2">
                <TaskItem title="Смоленск в картинах"/>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default TaskList
