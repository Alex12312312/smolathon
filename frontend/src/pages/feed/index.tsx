import { FeedItem } from '@/components/feedItem'
import { Group } from '@/components/group'
import { useCategoryFeed } from '@/hooks/assets.hooks'
import { useRef, useCallback, useEffect } from 'react'

export const Feed = () => {
    const { data, setSize } = useCategoryFeed()
    const loader = useRef<HTMLDivElement | null>(null)

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0]
            if (target.isIntersecting) {
                setSize((prevSize) => prevSize + 10)
            }
        },
        [setSize],
    )

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '20px',
            threshold: 0,
        })

        if (loader.current) {
            observer.observe(loader.current)
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current)
            }
        }
    }, [handleObserver])

    return (
        <>
            <Group
                className="flex h-[93vh] select-none overflow-x-hidden overflow-y-scroll overscroll-none p-3"
                name="Гойда"
            >
                <div className="flex flex-grow flex-wrap justify-center gap-3">
                    <div className="flex flex-wrap gap-4">
                        {data?.map((feedItems) => {
                            return feedItems.map((feedItem) => (
                                <FeedItem
                                    key={feedItem.id}
                                    title={feedItem.title}
                                    imageSrc={feedItem.image}
                                    description={feedItem.description}
                                />
                            ))
                        })}
                    </div>
                    <div ref={loader} className="flex h-10 w-full justify-center opacity-50">
                        <p className="animate-pulse">Ищем новые предложения...</p>
                    </div>
                </div>
            </Group>
        </>
    )
}

{
    /* <Group name="Гойда" className="h-full w-full p-4">
                <div className="flex flex-wrap gap-4">
                    <FeedItem
                        imageSrc="https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg"
                        title="Смоленская башня"
                        description="Lorem ipsum cheto xz"
                    ></FeedItem>
                    <FeedItem
                        imageSrc="https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg"
                        title="Смоленская башня"
                        description="Lorem ipsum cheto xz"
                    ></FeedItem>
                    <FeedItem
                        imageSrc="https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg"
                        title="Смоленская башня"
                        description="Lorem ipsum cheto xz"
                    ></FeedItem>
                    <FeedItem
                        imageSrc="https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg"
                        title="Смоленская башня"
                        description="Lorem ipsum cheto xz"
                    ></FeedItem>
                    <FeedItem
                        imageSrc="https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg"
                        title="Смоленская башня"
                        description="Lorem ipsum cheto xz"
                    ></FeedItem>
                    <FeedItem
                        imageSrc="https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg"
                        title="Смоленская башня"
                        description="Lorem ipsum cheto xz"
                    ></FeedItem>
                    <FeedItem
                        imageSrc="https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg"
                        title="Смоленская башня"
                        description="Lorem ipsum cheto xz"
                    ></FeedItem>
                    <FeedItem
                        imageSrc="https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg"
                        title="Смоленская башня"
                        description="Lorem ipsum cheto xz"
                    ></FeedItem>
                    <FeedItem
                        imageSrc="https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg"
                        title="Смоленская башня"
                        description="Lorem ipsum cheto xz"
                    ></FeedItem>
                    <FeedItem
                        imageSrc="https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg"
                        title="Смоленская башня"
                        description="Lorem ipsum cheto xz"
                    ></FeedItem>
                    <FeedItem
                        imageSrc="https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg"
                        title="Смоленская башня"
                        description="Lorem ipsum cheto xz"
                    ></FeedItem>
                    <FeedItem
                        imageSrc="https://i.pinimg.com/736x/ef/8e/8f/ef8e8fe7b17f025d644beaaaebd82c3d.jpg"
                        title="Смоленская башня"
                        description="Lorem ipsum cheto xz"
                    ></FeedItem>
                </div>
            </Group> */
}
