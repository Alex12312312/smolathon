import Navbar from '../../components/navbar'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

type LayoutProps = {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    const location = useLocation()
    if (location.pathname === '/greetings') {
        return <main>{children}</main>
    }

    return (
        <div className="flex flex-col justify-between h-dvh">
            <main className='h-[95%]'>{children}</main>
            <Navbar />
        </div>
    )
}

export default Layout
