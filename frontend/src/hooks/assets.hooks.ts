import { Asset } from '@/lib/api/types/assets.types'
import useSWRInfinite from 'swr/infinite'

const fetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((res) => res.result.data)

const getKey = (offset: number, previousPageData: Asset[]) => {
    if (previousPageData && !previousPageData.length) return null // reached the end
    console.log(`${import.meta.env.VITE_API_URL}/asset?offset=${offset}&limit=1`)
    return `${import.meta.env.VITE_API_URL}/asset?offset=${offset}&limit=1` // SWR key
}

export const useCategoryFeed = () => {
    //@ts-ignore
    const { data, size, setSize } = useSWRInfinite<Asset[]>(getKey, fetcher)

    if (!data) return { data, size, setSize }

    let total = 0
    for (let i = 0; i < data.length; i++) {
        total += data[i].length
    }

    return { data, size, setSize }
}
