import { useNavigate } from "react-router-dom"
interface CategoryCardI {
    link?: string,
    text?: string,
    ImageLink: string,
}

export const CategotyCard = (props: CategoryCardI) => {
    let navigator = useNavigate();
    return <div className="w-2/5 h-1/5 rounded-md" onClick={() => { props.link && navigator(props.link!) }}>
        <img className="bg-cover w-full h-full" src={props.ImageLink}></img>
        <div className="relative text-base">{props.text}</div>
    </div>
}