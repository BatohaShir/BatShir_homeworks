import { useShopCart } from "../../store/cart";
import { SiteHeader } from "../header/header";
import { useState } from "react";
import { Link } from 'react-router-dom';

export function ProductCart() {
    const { shopcart, removeItem } = useShopCart();
    const [quantities, setQuantities] = useState(shopcart.reduce((acc, item) => {
        acc[item.name] = 1;
        return acc;
    }, {}));

    const handleQuantityChange = (itemName, newQuantity) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemName]: newQuantity,
        }));
    };

    const cartsum = shopcart.reduce((acc, item) => acc + item.price * quantities[item.name], 0);
    const tax = cartsum * 0.05;
    const total_sum = cartsum > 0 ? cartsum + tax + 350 : cartsum + tax + 0;

    return (
        <>
        <SiteHeader />
        <div className="w-full max-w-5xl mx-auto px-4">
            <h1 className="text-2xl font-bold pt-[20px] text-center">Корзина покупок</h1>
            
            <div className="flex flex-wrap border-b border-gray-200 py-4">
                <label className="w-1/5 text-gray-700">Фотография</label>
                <label className="w-[37%] text-gray-700">Товар</label>
                <label className="w-[12%] text-gray-700">Цена</label>
                <label className="w-[10%] text-gray-700">Количество</label>
                <label className="w-[9%] text-gray-700">Удалить</label>
                <label className="w-[12%] text-right text-gray-700">Сумма</label>
            </div>

            <div className="space-y-4">
                {shopcart.length > 0 ? shopcart.map((item, index) => (
                    <div key={item.name} className="flex items-center border-b border-gray-200 pt-2 pb-6">
                        <div className="w-1/5 ml-[-50px] flex justify-center">
                            <Link to={`/products/${item.name}`}><img src={item.image} alt="" className="w-24 h-24 object-cover rounded-md transition-[1s]  hover:scale-[1.2] hover:rounded-md shadow-lg shadow-black" /></Link>
                        </div>
                        <div className="w-[37%] ml-[50px]">
                            <div className="font-bold mb-2">{item.name}</div>
                            <p className="text-sm mb-1">Состав: {item.ingredients}</p>
                            <p className="text-sm">О блюде: {item.dish_info_one}</p>
                        </div>
                        <div className="w-[12%] text-left font-bold">{item.price}₽</div>
                        <div className="w-[59px] ml-[12px]">
                            <input 
                                type="number" 
                                value={quantities[item.name]} 
                                min="1" 
                                className="w-full text-center border border-gray-300 rounded px-2 py-1"
                                onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value))}
                            />
                        </div>
                        <div className="w-[9%] ml-[24px]">
                            <button className="bg-red-600 text-white py-1 px-3 rounded text-sm" onClick={() => {removeItem(item.name)}}>
                                Удалить
                            </button>
                        </div>
                        <div className="w-[12%] text-right">{item.price * quantities[item.name]}₽</div>
                    </div>
                )) : (
                    <h1 className="text-center mt-[35px] text-[30px]">Корзина Пуста!</h1>
                )}
            </div>

            <div className="space-y-2 mt-6 w-[30%] ml-auto">
                <div className="flex justify-between border-b border-dotted border-gray-600 ">
                    <label className="text-gray-700 ">Сумма</label>
                    <div className="text-right">{cartsum}₽</div>
                </div>
                <div className="flex justify-between border-b border-dotted border-gray-600">
                    <label className="text-gray-700">Комиссия 5%</label>
                    <div className="text-right">{tax}₽</div>
                </div>
                <div className="flex justify-between  border-b border-dotted border-gray-600">
                    <label className="text-gray-700">Доставка</label>
                    <div className="text-right">350₽</div>
                </div>
                <div className="flex justify-between font-bold text-xl  border-b border-dotted border-gray-800">
                    <label>ИТОГО</label>
                    <div className="text-right">{total_sum}₽</div>
                </div>
            </div>
            <div className="flex space-x-4">
                {shopcart.length > 0 ? <button className="mt-6 mb-[20px] bg-red-600 text-white py-1 px-2 rounded text-xl block ml-auto ">
                    Оплатить
                </button> : null}
                {shopcart.length > 0 ? <Link to="/delivery"><button className="mt-6 mb-[20px] bg-green-600 text-white py-1 px-2 rounded text-xl block ml-auto">
                    Оформить доставку
                </button></Link> : null}
            </div>
        </div>
        </>
    );
}
