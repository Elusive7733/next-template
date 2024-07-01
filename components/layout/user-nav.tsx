'use client'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { internalLinks } from '@/constants/links'
import useToken from '@/hooks/useToken'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'

export function UserNav() {
    const [, tokenLoading, , removeToken] = useToken()
    const router = useRouter()
    const { theme } = useTheme()

    const handleLogout = () => {
        removeToken()
        router.push(internalLinks.login)
    }

    if (tokenLoading) {
        return <div>Loading...</div>
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                    <Avatar className='h-8 w-8'>
                        <AvatarImage
                            src={'avatars/avatar.png'}
                            alt={'avatar'}
                            className={cn(
                                (theme === 'dark' || theme === 'system') && 'invert'
                            )}
                        />
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                    <div className='flex flex-col space-y-1'>
                        <p className='text-sm font-medium leading-none'>{'Admin'}</p>
                        <p className='text-xs leading-none text-muted-foreground'>
                            {'admin@bleedai.com'}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
