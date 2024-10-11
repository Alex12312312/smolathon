import useSWR from 'swr'
import { User } from '@/lib/api/types/user.types'
import { ApiResponse } from '@/lib/api.types'
import { fetcher } from '@/lib/fetcher'

export const useUserGetById = (id: string) => {
    const { data, error, isLoading } = useSWR<ApiResponse<User>>(
        [`${import.meta.env.VITE_API_URL}/user/${id}`],
        // @ts-ignore
        fetcher,
    )

    console.log(data)

    return { user: data?.result, error, isLoading }
}

export const useUserGetMe = (token: string) => {
    const { data, error, isLoading } = useSWR<ApiResponse<User>>(
        [`${import.meta.env.VITE_API_URL}/user/me`, token],

        // @ts-ignore
        fetcher,
    )

    return { user: data?.result ?? undefined, error, isLoading }
}

export const useGetUserReferrals = (token: string, { id }: { id: string }) => {
    const { data, error, isLoading } = useSWR<ApiResponse<{ data: User[] }>>(
        [`${import.meta.env.VITE_API_URL}/user/${id}/referrals`, token],

        // @ts-ignore
        fetcher,
    )

    console.log(data)

    return { referrals: data?.result?.data, error, isLoading }
}
