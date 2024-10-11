import useSWR from 'swr'
import { User } from '@/lib/api/types/user.types'
import { fetcher } from '@/lib/fetcher'
import { ApiResponse } from '@/lib/api.types'

export const useGetMe = (token: string) => {
    const { data, error, isLoading } = useSWR<ApiResponse<User>>(
        [`${import.meta.env.VITE_API_URL}/user/me`, token],

        // @ts-ignore
        fetcher,
    )

    return { user: data ?? undefined, error, isLoading }
}
