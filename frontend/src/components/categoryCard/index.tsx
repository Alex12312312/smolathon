import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

type CategoryCardProps = {
    link?: string
    text?: string
    imageSrc?: string
    className?: string
    children?: ReactNode
}

export const CategoryCard = (props: CategoryCardProps) => {
    const navigator = useNavigate()

    return (
        <div
            className={cn(
                'relative h-40 w-2/5 cursor-pointer overflow-clip rounded-md',
                props.className,
            )}
            rounded-2xl
            onClick={() => {
                props.link && navigator(props.link!)
            }}
        >
            {props.imageSrc ? (
                <img className="h-full w-full object-cover" src={props.imageSrc}></img>
            ) : undefined}
            <div className="absolute left-4 top-4 max-w-[100px] select-none rounded-2xl text-[18px] font-bold text-white">
                {props.text}
            </div>
            {props.children}
        </div>
    )
}
