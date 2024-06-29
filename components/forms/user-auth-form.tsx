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
import { zodResolver } from '@hookform/resolvers/zod'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
    email: z.string().email({ message: 'Enter a valid email address' })
})

type UserFormValue = z.infer<typeof formSchema>

export default function UserAuthForm() {
    const [loading, setLoading] = useState(false)
    const defaultValues = {
        email: 'demo@gmail.com'
    }
    const form = useForm<UserFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues
    })

    return (
        <Form {...form}>
            <form onSubmit={() => console.log('submit')} className='w-full space-y-2'>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type='email'
                                    placeholder='Enter your email...'
                                    disabled={loading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button disabled={loading} className='ml-auto w-full' type='submit'>
                    Continue With Email
                </Button>
            </form>
        </Form>
    )
}
