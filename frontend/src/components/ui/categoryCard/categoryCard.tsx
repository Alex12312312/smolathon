import { cn } from '../../../lib/utils'
import { useNavigate } from 'react-router-dom'

type CategoryCardProps = {
    link?: string
    text?: string
    imageSrc?: string
    className?: string
}

export const CategoryCard = (props: CategoryCardProps) => {
    let navigator = useNavigate()
    return (
        <div
            className={cn('relative h-1/5 w-2/5 overflow-clip rounded-md', props.className)}
            rounded-2xl
            onClick={() => {
                props.link && navigator(props.link!)
            }}
        >
            {props.imageSrc ? (
                <img className="h-full w-full bg-cover" src={props.imageSrc}></img>
            ) : undefined}
            <div className="absolute left-4 top-4 rounded-2xl text-base font-bold text-white">
                {props.text}
            </div>
        </div>
    )
}
