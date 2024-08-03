import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AboutRest} from './components/pages/about_us/about';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { ProductPage } from './components/pages/product_page/productPage';
import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductCart } from './components/ProductCart/ProductCart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/menu',
    element: <ProductCard/>
  },
  {
    path: '/products/:productId',
    element: <ProductPage/>
  },
  {
    path: '/about',
    element: <AboutRest/>
  },
  {
    path: '/cart',
    element: <ProductCart/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
