import { useState } from 'react'
import { ApiResponse } from '../api.types'

type FetchMethod = 'POST' | 'PUT' | 'DELETE' | 'PATCH';

const useFetch = <TResponse, TBody = undefined>(route: string, method: FetchMethod) => {
    const [data, setData] = useState<ApiResponse<TResponse> | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState(false)

    const url = new URL(import.meta.env.VITE_API_URL)
    url.pathname = route

    const execute = async (body?: TBody) => {
        setLoading(true)

        if (body === undefined && method !== 'DELETE') {
            setError(new Error('Request body is required for this method.'));
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                ...(method !== 'DELETE' && { body: JSON.stringify(body) }),
            })
            const json = await response.json()
            setData(json as ApiResponse<TResponse>)
        } catch (err) {
            setError(err as Error)
        }
        setLoading(false)
    }

    return { execute, data, error, loading }
}

export default useFetch
