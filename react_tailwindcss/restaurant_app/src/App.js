import React from 'react';
import './App.css';
import { useShopCart } from './store/cart';
import { SiteHeader } from './components/header/header';
import { StartHome } from './components/pages/start_home/home';

function App(){
  const { shopcart, addItem, removeItem } = useShopCart();

  return (
    <div className="App">
      <SiteHeader shopcart={shopcart} removeItem={removeItem} />
      <StartHome/>
    </div>
  );
}

export default App;
