type FeedItemProps = {
    title: string
    description: string
    imageSrc: string
}

export const FeedItem = (props: FeedItemProps) => {
    return (
        <>
            <div className="bg-item flex h-[260px] w-full flex-grow flex-col overflow-clip rounded-xl sm:w-[250px]">
                <div className="h-40">
                    <img className="h-full w-full object-cover" src={props.imageSrc}></img>
                </div>
                <div className="p-5">
                    <h2 className="text-xl font-bold">{props.title}</h2>
                    <p className="text-sm text-gray-400">{props.description}</p>
                </div>
            </div>
        </>
    )
}
