import Navbar from '../../components/navbar/navbar'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

type LayoutProps = {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    const location = useLocation()
    if (location.pathname === '/greeting') {
        return <main>{children}</main>
    }

    return (
        <div className="flex flex-col justify-between min-h-full">
            <main>{children}</main>
            <Navbar />
        </div>
    )
}

export default Layout
