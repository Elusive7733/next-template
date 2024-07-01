import { NavItem } from '@/types'

const enviournment = process.env.NEXT_PUBLIC_ENVIRONMENT ?? 'development'

const getBackendLink = () => {
    if (enviournment === 'development') {
        return 'http://127.0.0.1:8000/admin'
    }
    return 'your-backend-prod-link'
}

const getFrontendLink = () => {
    if (enviournment === 'development') {
        return 'http://localhost:3000'
    }
    return 'your-frontend-prod-link'
}

export const navItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: 'dashboard',
        label: 'Dashboard'
    },
    {
        title: 'User',
        href: '/dashboard/user',
        icon: 'user',
        label: 'user'
    },
    {
        title: 'Employee',
        href: '/dashboard/employee',
        icon: 'employee',
        label: 'employee'
    },
    {
        title: 'Profile',
        href: '/dashboard/profile',
        icon: 'profile',
        label: 'profile'
    },

    {
        title: 'Login',
        href: '/',
        icon: 'login',
        label: 'login'
    }
]

export const externalLinks = {
    bleedAI: 'https://www.bleedai.com/',
    about: 'https://www.bleedai.com/get-to-know-us/',
    email: 'mailto:contact@bleedai.com',
    contactus: 'https://www.bleedai.com/contact-us/',
    backendLink: getBackendLink(),
    frontendLink: getFrontendLink()
}

export const internalLinks = {
    // General Routes
    login: '/',

    dashboard: '/dashboard',
    profile: '/dashboard/profile',
    user: '/dashboard/user',
    employee: '/dashboard/employee'
}

const userEndpoints = {
    allowUser: 'allow_user',
    get_all: 'user/get/all',
    get: 'user/get?user_id',
    update: 'api/user/update',
    delete: 'api/user/delete'
}

const authEndpoints = {
    login: 'auth/login'
}

export const apiEndpoints = {
    //Auth Endpoints
    auth: authEndpoints,

    //User Endpoints
    user: userEndpoints
}
