'use client'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { internalLinks } from '@/constants/links'
import useToken from '@/hooks/useToken'
import { login } from '@/server/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
    email: z.string().email({ message: 'Enter a valid email address' }),
    password: z.string().min(1, { message: 'Password must be at least 1 characters' })
})

type UserFormValue = z.infer<typeof formSchema>

export default function UserAuthForm() {
    const [token, tokenLoading, updateToken] = useToken()
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    if (token && !tokenLoading) {
        router.push(internalLinks.dashboard)
    }

    const defaultValues = {
        email: '',
        password: ''
    }

    const form = useForm<UserFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues
    })

    const onSubmit = async (data: UserFormValue) => {
        setLoading(true)
        try {
            const response = await login(data.email, data.password)
            console.log(response)
            if (response.token) {
                updateToken(response.token)
                router.push(internalLinks.dashboard)
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message)
            }
            return { error: 'An error occurred' }
        } finally {
            setLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-2'>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type='email'
                                    placeholder='example@gmail.com'
                                    disabled={loading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type='password'
                                    placeholder='Enter your password'
                                    disabled={loading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button disabled={loading} className='ml-auto w-full' type='submit'>
                    Login
                </Button>
            </form>
        </Form>
    )
}
