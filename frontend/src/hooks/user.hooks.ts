import useSWR from 'swr'
import { User } from '@/lib/api/types/user.types'
import { ApiResponse } from '@/lib/api.types'

export const useGetUserById = ( id: string ) => {
    const { data, error, isLoading } = useSWR<ApiResponse<User>>([`${import.meta.env.VITE_API_URL}/user/${id}`],
        // @ts-ignore
        fetcher,
    )

    return { user: data?.result ?? undefined, error, isLoading }
}
