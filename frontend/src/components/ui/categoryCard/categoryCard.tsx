import { useNavigate } from 'react-router-dom'

type CategoryCardProps = {
    link?: string
    text?: string
    imageSrc: string
}

export const CategoryCard = (props: CategoryCardProps) => {
    let navigator = useNavigate()
    return (
        <div
            className="h-1/5 w-2/5 rounded-md"
            onClick={() => {
                props.link && navigator(props.link!)
            }}
        >
            <img className="h-full w-full bg-cover" src={props.imageSrc}></img>
            <div className="relative text-base">{props.text}</div>
        </div>
    )
}
