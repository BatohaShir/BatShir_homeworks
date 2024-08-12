import React from 'react';
import { Link } from 'react-router-dom';
import { SiteHeader } from "../header/header";
import { dish_menu } from "../../dish_type";
import { useShopCart } from "../../store/cart";
import { useMenuReactQuery } from "../../store/menu";

export function ProductCard() {
  const { addItem, shopcart } = useShopCart();
  const { data: menu, isLoading: Loading } = useMenuReactQuery();

  const isItemInCart = (itemName) => {
    return shopcart.some(item => item.name === itemName);
  };

  return (
    <div>
      <SiteHeader />
      <h1 className="text-[30px] text-center mt-[15px]">Меню нашего ресторана</h1>
      <div className="m-auto p-[1.5em] w-[90%]">
        <div className="font-sans text-[14px]">
          {dish_menu.map((category, index) => (
            <div key={index}>
              <h2 className="m-0 pb-[10px] border-b-2 border-gray-300 text-[30px]">{category.type}</h2>
              <div className="grid grid-cols-3 gap-8 py-6 pt-[30px]">
                {Loading && 
                  <div>
                    Блюда загружаются...
                  </div>}
                {!!menu && menu
                  .filter(item => item.category === category.type)
                  .map((item, itemIndex) => (
                    <div key={itemIndex} className="flex">
                      <Link to={`/products/${item.name}`}>
                        <div className="inline-block overflow-hidden rounded-md">
                          <img src={item.image} alt={item.name} className="w-[150px] h-[150px] shrink-0 object-cover mr-[1.5em] rounded-md transition-[1s] hover:scale-[1.2] hover:rounded-md shadow-lg shadow-black" />
                        </div>
                      </Link>
                      <div className="grow ml-[5px] relative">
                        <h3 className="flex justify-between m-0">
                          <span className="mr-[1.5em] font-bold">{item.name}</span>
                          <span className="font-bold">{item.price}₽</span>
                        </h3>
                        <p className="leading-[1.6] h-[50px]">
                          <strong>Состав блюда: </strong>{item.ingredients}
                        </p>
                        <p className="text-slate-600 h-[50px]">{item.dish_info_one}</p>
                        <button onClick={() => addItem(item)} className="no-underline text-white text-base bg-orange-500 w-[100%] bottom-0 h-[28px] cursor-pointer rounded-[25px] before:bg-black-200">
                          {isItemInCart(item.name) ? "Блюдо уже в корзине!" : "Добавить в корзину"}
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
