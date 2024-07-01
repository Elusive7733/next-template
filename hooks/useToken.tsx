'use client'

import { useCallback, useEffect, useState } from 'react'

type UseTokenReturnType = [
    token: string | null,
    tokenLoading: boolean,
    updateToken: (newToken: string | null) => void,
    removeToken: () => void
]

const useToken = (): UseTokenReturnType => {
    const [token, setToken] = useState<string | null>(null)
    const [tokenLoading, setTokenLoading] = useState<boolean>(true)

    useEffect(() => {
        const tokenFromStorage = localStorage.getItem('token')
        if (tokenFromStorage) {
            setToken(tokenFromStorage)
        } else {
            localStorage.removeItem('token')
        }
        setTokenLoading(false)
    }, [])

    const updateToken = useCallback((newToken: string | null = null): void => {
        if (newToken) {
            localStorage.setItem('token', newToken)
        } else {
            localStorage.removeItem('token')
        }
        setToken(newToken)
    }, [])

    const removeToken = useCallback((): void => {
        localStorage.removeItem('token')
        setToken(null)
    }, [])

    return [token, tokenLoading, updateToken, removeToken]
}

export default useToken
