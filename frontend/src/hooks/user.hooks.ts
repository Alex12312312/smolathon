import useSWR from 'swr'
import { User } from '@/lib/api/types/user.types'

export const useGetUserById = ({ id }: { id: string }) => {
    const { data, error, isLoading } = useSWR<User>(`/api/users/${id}`)

    return { user: data, error, isLoading }
}
