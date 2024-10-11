import { FeedItem } from '@/components/feedItem'
import { Group } from '@/components/group'
import { useCategoryFeed } from '@/hooks/assets.hooks'
import { useRef, useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Feed = () => {
    const [searchParams, _] = useSearchParams()
    const category = searchParams.get('category') || undefined

    const { data, setSize } = useCategoryFeed(category)
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

    const title = () => {
        switch (category) {
            case 'Activity':
                return 'Мероприятия'
            case 'DigitalArt':
                return 'Цифровое искусство'
            case 'HeroesAndEvents':
                return 'Герои и события'
            case 'HistoricalSites':
                return 'Исторические объекты'
            default:
                return 'Каталог'
        }
    }

    return (
        <>
            <Group
                className="mt-3 flex h-[90vh] select-none overflow-x-hidden overflow-y-scroll overscroll-none p-3"
                name={title()}
            >
                <div className="flex flex-grow flex-wrap justify-center gap-3">
                    <div className="flex flex-wrap gap-4">
                        {data?.map((feedItems) => {
                            return feedItems.map((feedItem) => (
                                <FeedItem
                                    id={feedItem.id}
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
