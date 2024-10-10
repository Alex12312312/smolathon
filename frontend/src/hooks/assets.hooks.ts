export const useGetMe = (token: string) => {
    const { data, error, isLoading } = useSWR<ApiResponse<User>>(
        [`${import.meta.env.VITE_API_URL}/user/me`, token],

        // @ts-ignore
        fetcher,
    )

    return { user: data?.result ?? undefined, error, isLoading }
}
