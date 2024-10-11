import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function telegramForwardUrl(text = '', payload = '') {
    const telegramUrl = new URL('https://t.me/share/url')

    telegramUrl.searchParams.set('url', `${import.meta.env.VITE_WEB_APP_URL}?start=${payload}`)
    telegramUrl.searchParams.set('text', text)

    // IOS bug with URL encoding
    const normalized = telegramUrl.toString().replace(/\+/g, '%20').replace(/\*/g, '%2A')

    return normalized
}
