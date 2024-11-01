export type Asset = {
    id: string
    createdAt: Date
    updatedAt: Date
    image: string
    description: string
    title: string
    creatorId: string
    consumerId: bigint | null
    price: number
}

export type Category = 'HeroesAndEvents' | 'Activity' | 'HistoricalSites' | 'DigitalArt'
