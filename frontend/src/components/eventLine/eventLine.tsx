interface IEventLine {
    title: string
    type: string
    picture: string
}

export const EventLine = (props: IEventLine) => {
    return (
        <div className="flex h-12 w-11/12 flex-row self-center justify-between">
            <img className="object-scale size-12 rounded-full mr-3" src={props.picture}></img>
            <div className="flex w-3/4 flex-col">
                <div className="font-bold">{props.title}</div>
                <div className="font-bold text-[#707070]">{props.type}</div>
            </div>
            <button className="w-fit rounded bg-green-500 px-3 py-1 text-white">Билеты</button>
        </div>
    )
}
