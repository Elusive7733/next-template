import { apiEndpoints, externalLinks } from '@/constants/links'

export async function login(email: string, password: string) {
    try {
        const url = `${externalLinks.backendLink}/${apiEndpoints.auth.login}`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
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
