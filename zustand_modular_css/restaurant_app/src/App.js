import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { useShopCart } from './store/cart';
import { ProductCard } from './components/ProductCard/ProductCard';
import { SiteHeader } from './components/header/header';

function App(){
  const { shopcart, addItem, removeItem } = useShopCart();
  
  const Menu = [
    {
      name: 'Буузы',
      price: 100,
      image: 'https://storage.weacom.ru/v2080/2b/izF-yNUeRyk.jpg',
      ingredients: 'Фарш, тесто, лук'
    },
    {
      name: 'Шулэн',
      price: 80,
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/f6/e4/b9/caption.jpg',
      ingredients: 'Мясо, лук, лапша домашняя'
    },
    {
      name: 'Цуйван',
      price: 120,
      image: 'https://orda03.ru/wp-content/uploads/2021/02/TDN_0688-600x400.jpg',
      ingredients: 'Мясо, лук, лапша домашняя'
    },
    {
      name: 'Хушууры',
      price: 90,
      image: 'https://orda03.ru/wp-content/uploads/2021/02/TDN_0717-600x400.jpg',
      ingredients: 'Фарш, тесто, лук'
    },
    {
      name: 'Шарбин',
      price: 60,
      image: 'https://eda.yandex.ru/images/3595156/2ef6878c16bee14087088dff3bd9e3f0-800x800.jpeg',
      ingredients: 'Фарш, тесто, лук'
    },
    {
      name: 'Хорхог',
      price: 60,
      image: 'https://pbs.twimg.com/media/FJhl-uGakAIevhz.jpg',
      ingredients: 'Мясо, морковь, лук, перец'
    },
    {
      name: 'Боодог',
      price: 1900,
      image: 'https://www.gastronomiac.com/wp/wp-content/uploads/2021/12/Boodog-mongol.jpg',
      ingredients: 'Мясо, морковь, лук, перец'
    },
    {
      name: 'Комбо',
      price: 1900,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtQH1YqURbvP1Pa7yYX_NnzwxZwP-cGXP5nQ3CDOLrXiAnIk7kkVrYaHrO_lcSzAuYcw&usqp=CAU',
      ingredients: 'ывппщоуапоу пуап'
    },
  ];

  return (
    <div className="App">
      <SiteHeader shopcart={shopcart} removeItem={removeItem} />
      <ProductCard Menu={Menu} Button={Button} addItem={addItem} />
    </div>
  );
}

export default App;
