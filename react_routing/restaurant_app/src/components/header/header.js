import logo from '../../assets/logo.jpg';
import { NavComp } from '../Navigation_menu_component';
import { CiShoppingCart } from "react-icons/ci";
import { ProductCart } from '../ProductCart/ProductCart';
import { useState } from 'react';
import classNames from 'classnames';
import style from './header.module.css'

export function SiteHeader({ shopcart = [], removeItem }) {
    let [cartOpen, setCartOpen] = useState(false);
    const cartsum = shopcart.reduce((acc, item) => acc + item.price, 0);

    return (
        <header>  
            <div className="{style.All_nav_menu}">
                <div className={style.Logo}>
                    <a href='/'><img src={logo} alt="Logo of website" style={{
                        width: '70px',
                        paddingTop: '15px',
                        borderRadius: '50%',
                        marginLeft: '15px'
                    }} /></a>
                </div>
                <div className={style.Nav_menu}>
                    <ul>
                        <a href='/about'><li><NavComp text="About" link="#1" /></li></a>
                        <li><NavComp text="Contacts" link="#1" /></li>
                        <li><NavComp text="Location" link="#1" /></li>
                        <CiShoppingCart 
                            onClick={() => setCartOpen(!cartOpen)} 
                            className={classNames(style.cart, { [style.active]: cartOpen })}
                        />   
                        <ProductCart cartOpen={cartOpen} shopcart={shopcart} removeItem={removeItem} cartsum={cartsum} />
                    </ul>
                </div>
            </div>
        </header>
    );
}
