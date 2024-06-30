// useToken.ts
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { internalLinks } from '@/constants/links'

const useToken = (): string | null => {
    const [token, setToken] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const tokenFromStorage = localStorage.getItem('token')

            if (tokenFromStorage && tokenFromStorage.length) {
                setToken(tokenFromStorage) // Set token if found
            } else {
                router.push(internalLinks.login) // Redirect if token is not found
            }
        }
    }, [router])

    return token
}

export default useToken
