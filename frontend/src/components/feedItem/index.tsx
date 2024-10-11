type FeedItemProps = {
    title: string
    description: string
    imageSrc: string
}

export const FeedItem = (props: FeedItemProps) => {
    console.log(props.imageSrc)
    return (
        <>
            <div className="flex w-full flex-grow flex-col overflow-clip rounded-xl bg-item sm:w-[250px]">
                <div className="h-40">
                    <img className="h-full w-full object-cover" src={props.imageSrc}></img>
                </div>
                <div className="flex flex-col gap-2 p-5">
                    <h2 className="text-xl font-bold">{props.title}</h2>
                    <p className="w-[300px] overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-400">
                        {props.description}
                    </p>
                </div>
            </div>
        </>
    )
}
