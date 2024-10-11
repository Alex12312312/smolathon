interface IEventLine{
    title: string,
    type: string,
    picture: string,
}

export const EventLine = (props:IEventLine) => {
    return <div className="w-5/6 h-12 flex flex-row self-center">
    <img src={props.picture}></img>
    <div className="flex flex-col w-1/2">
        <div className="text-black font-bold">{props.title}</div>
        <div className="text-gray-500 font-bold">{props.type}</div>
    </div>
    <button className="bg-green-500 text-white w-fit py-1 px-3 rounded">Билеты</button>
    </div>
}