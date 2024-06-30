import { apiEndpoints, externalLinks } from '@/constants/links'

export async function getUser(id: string, token: string) {
    try {
        if (!token || !token.length) throw new Error('Token not found')
        const url = `${externalLinks.backendLink}/${apiEndpoints.user.get}=${id}`
        const response = await fetch(url, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })

        if (response.ok) {
            const data = await response.json()
            return data
        }

        throw new Error('An error occurred')
    } catch (error) {
        throw new Error((error as string) || 'An error occurred')
    }
}

export async function getAll(token: string) {
    try {
        if (!token || !token.length) throw new Error('Token not found')
        const url = `${externalLinks.backendLink}/${apiEndpoints.user.get_all}`
        const response = await fetch(url, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })

        if (response.ok) {
            const data = await response.json()
            return data
        }

        throw new Error('An error occurred')
    } catch (error) {
        throw new Error((error as string) || 'An error occurred')
    }
}
