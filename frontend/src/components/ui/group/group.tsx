import { cn } from '../../../lib/utils'
import { ReactNode } from 'react'

type GroupProps = {
    children: ReactNode
    name: string
    className?: string
}

export const Group = (props: GroupProps) => {
    return (
        <div className={cn(props.className, 'flex flex-col gap-5')}>
            <p className="text-lg font-bold">{props.name}</p>
            {props.children}
        </div>
    )
}
