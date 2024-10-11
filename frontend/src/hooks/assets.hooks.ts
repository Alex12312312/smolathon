import { ApiResponse } from '@/lib/api.types'
import { Asset, Category } from '@/lib/api/types/assets.types'
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import { fetcher } from '@/lib/fetcher'

const longFetcher = (url: string) =>
    fetch(url)
        .then((res) => res.json())
        .then((res) => res.result.data)

const getKeyNoCategory = (offset: number, previousPageData: Asset[]) => {
    if (previousPageData && !previousPageData.length) return null // reached the end
    console.log(`${import.meta.env.VITE_API_URL}/asset?offset=${offset}&limit=1`)
    return `${import.meta.env.VITE_API_URL}/asset?offset=${offset}&limit=1` // SWR key
}

const getKeyHeroesAndEvents = (offset: number, previousPageData: Asset[]) => {
    if (previousPageData && !previousPageData.length) return null // reached the end
    console.log(`${import.meta.env.VITE_API_URL}/asset?offset=${offset}&limit=1`)
    return `${import.meta.env.VITE_API_URL}/asset?offset=${offset}&limit=1&category=HeroesAndEvents` // SWR key
}

const getKeyDigitalArt = (offset: number, previousPageData: Asset[]) => {
    if (previousPageData && !previousPageData.length) return null // reached the end
    console.log(`${import.meta.env.VITE_API_URL}/asset?offset=${offset}&limit=1`)
    return `${import.meta.env.VITE_API_URL}/asset?offset=${offset}&limit=1&category=DigitalArt` // SWR key
}

const getKeyActivity = (offset: number, previousPageData: Asset[]) => {
    if (previousPageData && !previousPageData.length) return null // reached the end
    console.log(`${import.meta.env.VITE_API_URL}/asset?offset=${offset}&limit=1`)
    return `${import.meta.env.VITE_API_URL}/asset?offset=${offset}&limit=1&category=Activity` // SWR key
}

const getKeyHistoricalSites = (offset: number, previousPageData: Asset[]) => {
    if (previousPageData && !previousPageData.length) return null // reached the end
    console.log(`${import.meta.env.VITE_API_URL}/asset?offset=${offset}&limit=1`)
    return `${import.meta.env.VITE_API_URL}/asset?offset=${offset}&limit=1&category=HistoricalSites` // SWR key
}

export const useCategoryFeed = (category?: Category | string) => {
    switch (category) {
        case 'Activity':
            return useCategoryFeedActivity()

        case 'DigitalArt':
            return useCategoryFeedDigitalArt()

        case 'HeroesAndEvents':
            return useCategoryFeedHeroesAndEvents()

        case 'HistoricalSites':
            return useCategoryFeedHistoricalSites()

        default:
            return useCategoryFeedDefault()
    }
}

export const useCategoryFeedHistoricalSites = () => {
    const { data, size, setSize } = useSWRInfinite<Asset[]>(getKeyHistoricalSites, longFetcher)

    if (!data) return { data, size, setSize }

    let total = 0
    for (let i = 0; i < data.length; i++) {
        total += data[i].length
    }

    return { data, size, setSize }
}

export const useCategoryFeedHeroesAndEvents = () => {
    const { data, size, setSize } = useSWRInfinite<Asset[]>(getKeyHeroesAndEvents, longFetcher)

    if (!data) return { data, size, setSize }

    let total = 0
    for (let i = 0; i < data.length; i++) {
        total += data[i].length
    }

    return { data, size, setSize }
}

export const useCategoryFeedDigitalArt = () => {
    //@ts-ignore
    const { data, size, setSize } = useSWRInfinite<Asset[]>(getKeyDigitalArt, longFetcher)

    if (!data) return { data, size, setSize }

    let total = 0
    for (let i = 0; i < data.length; i++) {
        total += data[i].length
    }

    return { data, size, setSize }
}

export const useCategoryFeedActivity = () => {
    //@ts-ignore
    const { data, size, setSize } = useSWRInfinite<Asset[]>(getKeyActivity, longFetcher)

    if (!data) return { data, size, setSize }

    let total = 0
    for (let i = 0; i < data.length; i++) {
        total += data[i].length
    }

    return { data, size, setSize }
}

export const useCategoryFeedDefault = () => {
    //@ts-ignore
    const { data, size, setSize } = useSWRInfinite<Asset[]>(getKeyNoCategory, longFetcher)

    if (!data) return { data, size, setSize }

    let total = 0
    for (let i = 0; i < data.length; i++) {
        total += data[i].length
    }

    return { data, size, setSize }
}

export const useGetAssetById = (id: string) => {
    const { data, error, isLoading } = useSWR<ApiResponse<Asset>>(
        [`${import.meta.env.VITE_API_URL}/asset/${id}`],
        // @ts-ignore
        fetcher,
    )

    console.log({ data, id })

    return { asset: data?.result, error, isLoading }
}

export const useGetAssetsByUserId = (id: string) => {
    const { data, error, isLoading } = useSWR<ApiResponse<{ data: Asset[] }>>(
        [`${import.meta.env.VITE_API_URL}/user/${id}/asset`],
        // @ts-ignore
        longFetcher,
    )

    console.log(`${import.meta.env.VITE_API_URL}/user/${id}/asset`)

    console.log({ data, penis: true })

    return { asset: data?.result?.data, error, isLoading }
}
