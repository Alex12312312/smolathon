import home from '../../assets/home-icon.svg'
// import CartIcon from '../../assets/cart-icon.svg'
import collections from '../../assets/collections-icon.svg'
import profile from '../../assets/profile-icon.svg'
import { Link, useLocation } from 'react-router-dom'

function NavbarIcon({ route, src, text }: { route: string; src: string; text: string }) {
    const location = useLocation()
    const isActive = (path: string) => location.pathname === path

    return (
        <Link to={route} className="flex select-none flex-col items-center justify-evenly">
            <img
                src={src}
                className={`h-[26px] select-none ${isActive(route) ? 'fill-[#009951]' : ''}`}
                alt={text}
                style={
                    isActive(route)
                        ? {
                              filter: 'invert(34%) sepia(84%) saturate(2536%) hue-rotate(135deg) brightness(91%) contrast(101%)',
                          }
                        : undefined
                }
            />
            <h1
                className={`select-none text-[10px] font-medium ${isActive(route) ? 'text-[#009951]' : 'text-[#707070]'}`}
            >
                {text}
            </h1>
        </Link>
    )
}

function Navbar() {
    return (
        <nav>
            <div className="mx-2 flex w-full flex-row justify-evenly bg-background p-2">
                <NavbarIcon route="/main" src={home} text="Главная" />
                <NavbarIcon route="/collections" src={collections} text="Коллекции" />
                <NavbarIcon route="/me" src={profile} text="Профиль" />
                {/* <NavbarIcon route="/cart" src={CartIcon} text="Корзина" /> */}
            </div>
        </nav>
    )
}

export default Navbar
