import home from '../../assets/home-icon.svg'
import cart from '../../assets/cart-icon.svg'
import collections from '../../assets/collections-icon.svg'
import profile from '../../assets/profile-icon.svg'

function Navbar() {
    return (
        <div className="flex flex-row justify-evenly mx-2 p-2 border-t border-gray-200">
            <div className="flex flex-col justify-evenly items-center">
                <img src={home} className='h-[26px]'/>
                <h1 className="text-[10px] font-medium text-[#009951]">Главная</h1>
            </div>
            <div className="flex flex-col justify-evenly items-center">
                <img src={cart} className='h-[26px]'/>
                <h1 className="text-[10px] font-medium">Корзина</h1>
            </div>
            <div className="flex flex-col justify-evenly items-center">
                <img src={collections} className='h-[26px]'/>
                <h1 className="text-[10px] font-medium">Коллекция</h1>
            </div>
            <div className="flex flex-col justify-evenly items-center">
                <img src={profile} className='h-[26px]'/>
                <h1 className="text-[10px] font-medium">Профиль</h1>
            </div>
        </div>
    )
}

export default Navbar
