import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { useShopCart } from './store/cart';
import { ProductCard } from './components/ProductCard/ProductCard';
import { SiteHeader } from './components/header/header';
import { menu } from './menu';

function App(){
  const { shopcart, addItem, removeItem } = useShopCart();

  return (
    <div className="App">
      <SiteHeader shopcart={shopcart} removeItem={removeItem} />
      <ProductCard Menu={menu} Button={Button} addItem={addItem} />
    </div>
  );
}

export default App;
