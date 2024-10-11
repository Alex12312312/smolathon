import { ApiResponse } from '@/lib/api.types'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import { Comment } from '@/lib/api/types/comments.types'

export const useGetCommentsByAssetId = (id: string) => {
    const { data, error, isLoading } = useSWR<ApiResponse<{ data: Comment[] }>>(
        [`${import.meta.env.VITE_API_URL}/asset/${id}/comment`, null],

        // @ts-ignore
        fetcher,
    )

    console.log(data)

    return { comments: data?.result?.data, error, isLoading }
}
