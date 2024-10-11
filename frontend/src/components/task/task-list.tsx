import { Accordion, AccordionItem } from '@/components/ui/accordion'
import TaskItem from './task-item'

function TaskList() {
    return (
        <div className='px-7 overflow-y-scroll'>
            <Accordion type="single" collapsible={false} className="divide-y divide-gray-200 overflow-y-scroll">
                <AccordionItem value="item-1" className="py-2">
                    <TaskItem/>
                </AccordionItem>
                <AccordionItem value="item-2" className="py-2">
                <TaskItem/>
                </AccordionItem>
                <AccordionItem value="item-3" className="py-2">
                <TaskItem/>
                </AccordionItem>
                <AccordionItem value="item-4" className="py-2">
                <TaskItem/>
                </AccordionItem>
                <AccordionItem value="item-5" className="py-2">
                <TaskItem/>
                </AccordionItem>
                <AccordionItem value="item-6" className="py-2">
                <TaskItem/>
                </AccordionItem>
                <AccordionItem value="item-7" className="py-2">
                <TaskItem/>
                </AccordionItem>
                <AccordionItem value="item-8" className="py-2">
                <TaskItem/>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default TaskList
