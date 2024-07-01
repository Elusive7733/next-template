import { Toaster } from '@/components/ui/toaster'
import '@uploadthing/react/styles.css'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/layout/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Next.js Template',
    description: 'Template with Next.js and Shadcn'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' suppressHydrationWarning>
            {/* Remove the dark keyword to enable other themes */}
            <body className={`${inter.className} overflow-hidden`}>
                <Providers>
                    <NextTopLoader />
                    <Toaster />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
