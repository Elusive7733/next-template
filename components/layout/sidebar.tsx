'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardNav } from '@/components/dashboard-nav'
import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import { useSidebar } from '@/hooks/useSidebar'
import { navItems } from '@/constants/links'
import useToken from '@/hooks/useToken'
import { internalLinks } from '@/constants/links'
import { Icons } from '@/components/icons'

type SidebarProps = {
    className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const { isMinimized, toggle } = useSidebar()
    const [status, setStatus] = useState(false)
    const [, tokenLoading, , removeToken] = useToken()
    const router = useRouter()
    const Icon = Icons['logout' || 'arrowRight']

    const handleToggle = () => {
        setStatus(true)
        toggle()
        setTimeout(() => setStatus(false), 500)
    }

    const handleLogout = () => {
        removeToken()
        router.push(internalLinks.login)
    }

    if (tokenLoading) {
        return <div>Loading...</div>
    }

    return (
        <nav
            className={cn(
                'relative z-10 flex h-screen flex-none flex-col justify-between border-r pt-20 md:block',
                status && 'duration-500',
                !isMinimized ? 'w-72' : 'w-[72px]',
                className
            )}
        >
            <div>
                <ChevronLeft
                    className={cn(
                        'absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground',
                        isMinimized && 'rotate-180'
                    )}
                    onClick={handleToggle}
                />
                <div className='space-y-4 py-4'>
                    <div className='px-3 py-2'>
                        <div className='mt-3 space-y-1'>
                            <DashboardNav items={navItems} />
                        </div>
                    </div>
                </div>
                {/* Logout Button positioned at the bottom of the sidebar */}
            </div>
            <button
                className='m-3 flex gap-1 rounded-md py-2 text-left text-sm font-medium text-red-600 hover:bg-red-600 hover:text-red-50'
                onClick={handleLogout}
            >
                <Icon className={`ml-3 size-5`} />
                {!isMinimized ? <span className='mr-2 truncate'>Logout</span> : ''}
            </button>
        </nav>
    )
}

export default Sidebar
