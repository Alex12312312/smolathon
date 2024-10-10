import useSWR from 'swr'
import { User } from '@/lib/api/types/user.types'

export const useGetMe= () => {
    const { data, error, isLoading } = useSWR<User>(`/user/me`)

    return { user: data, error, isLoading }
}
