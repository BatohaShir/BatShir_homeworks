import { FaBars } from "react-icons/fa";
import { useShopCart } from '../../store/cart';
import { Link } from 'react-router-dom';


export function SiteHeader() {
    const {shopcart} = useShopCart();
    
    return (
        <div className='sticky top-0 relative z-10 border-b border-black backdrop-blur'>
            <div className='w-full h-[60px] max-w-[1200px] mx-auto flex items-center justify-between'>
                <div className='logo'>
                    <Link to='/' className='no-underline text-black text-lg cursor-pointer hover:text-orange-500'>Modern Nomads</Link>
                </div>
                <ul className='flex'>
                    <div className='list-none flex gap-8'>
                        <li><Link to="/about" className='no-underline text-black text-base hover:text-orange-500'>О нас</Link></li>
                        <li><Link to="/menu" className='no-underline text-black text-base hover:text-orange-500'>Меню</Link></li>
                        <li><Link to="/dd" className='no-underline text-black text-base hover:text-orange-500'>Локация</Link></li>
                    </div>
                </ul>
                <Link to="/cart" className='no-underline text-white text-base bg-orange-500 pt-[0.5rem] pb-[0.5rem] pl-[1rem] pr-[1rem] border-0 outline-none rounded-[20px] text-[0.8rem] font-bold cursor-pointer hover:scale-[1.05] active:scale-[0.95] flex'>Корзина <p className='w-[20px] h-[20px] bg-green-600 ml-[5px] rounded-full flex items-center justify-center text-white text-xs mt-[4px]'>{shopcart.length}</p></Link>
                <div className='text-white text-[1.5rem] cursor-pointer hidden'>
                    <FaBars />
                </div>
            </div>
        </div>
    );
}

