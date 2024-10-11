// @ts-ignore
export function fetcher(data: [url: string, token?: string, wallet?: string]) {
    const [url, token, wallet] = data

    return fetch(url, {
        method: 'GET',
        headers: {
            ...(!!token && { Authorization: token }),
            'Content-Type': 'application/json',
            ...(!!wallet && { 'X-TonWallet': wallet }),
        },
    }).then((res) => res.json())
}
