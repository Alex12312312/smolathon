import home from '../../assets/home-icon.svg'
import cart from '../../assets/cart-icon.svg'
import collections from '../../assets/collections-icon.svg'
import profile from '../../assets/profile-icon.svg'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className="flex flex-row justify-evenly mx-2 p-2 border-t border-gray-200">
                <Link to="/main" className="flex flex-col justify-evenly items-center">
                    <img src={home} className='h-[26px]' alt="Главная" />
                    <h1 className="text-[10px] font-medium text-[#009951]">Главная</h1>
                </Link>
                <Link to="/cart" className="flex flex-col justify-evenly items-center">
                    <img src={cart} className='h-[26px]' alt="Корзина" />
                    <h1 className="text-[10px] font-medium">Корзина</h1>
                </Link>
                <Link to="/collections" className="flex flex-col justify-evenly items-center">
                    <img src={collections} className='h-[26px]' alt="Коллекция" />
                    <h1 className="text-[10px] font-medium">Коллекция</h1>
                </Link>
                <Link to="/me" className="flex flex-col justify-evenly items-center">
                    <img src={profile} className='h-[26px]' alt="Профиль" />
                    <h1 className="text-[10px] font-medium">Профиль</h1>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
