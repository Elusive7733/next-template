'use client'

import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'
import { internalLinks } from '@/constants/links'
import useToken from '@/hooks/useToken'
import { useRouter } from 'next/navigation'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const [token, tokenLoading] = useToken()

    if (!tokenLoading && !token) {
        router.push(internalLinks.login)
    }

    if (tokenLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Header />
            <div className='flex h-screen overflow-hidden'>
                <Sidebar />
                <main className='flex-1 overflow-hidden pt-16'>{children}</main>
            </div>
        </>
    )
}
