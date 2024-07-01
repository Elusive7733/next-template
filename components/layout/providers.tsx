'use client'
import React from 'react'
import ThemeProvider from './ThemeToggle/theme-provider'

// You can also add other providers here as well
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
                {children}
            </ThemeProvider>
        </>
    )
}
