interface IEventLine {
    title: string
    type: string
    picture: string
}

export const EventLine = (props: IEventLine) => {
    return (
        <div className="flex h-12 w-5/6 flex-row self-center">
            <img src={props.picture}></img>
            <div className="flex w-1/2 flex-col">
                <div className="font-bold text-black">{props.title}</div>
                <div className="font-bold text-[#707070]">{props.type}</div>
            </div>
            <button className="w-fit rounded bg-green-500 px-3 py-1 text-white">Билеты</button>
        </div>
    )
}
