import style from './ProductCart.module.css'

export function ProductCart({ cartOpen, shopcart, removeItem, cartsum }) {
    if (!cartOpen) {
        return null;
    }

    return (
        <div className={style.shop_cart}>
            <h4 style={{ paddingTop: '10px' }}>КОРЗИНА</h4>
            <ul style={{ marginTop: '5px' }}>
                {shopcart.length > 0 ? shopcart.map((item, index) => (
                    <li key={index} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'left',
                        marginLeft: '15px',
                        marginTop: '8px'
                    }}>
                        {index + 1}) {item.name} ------------- {item.price} Рублей
                        <button className={style.removeProduct} onClick={() => removeItem(item.name)}> x </button>
                    </li>
                )) : (
                    <h6 style={{ paddingTop: '15px' }}>Корзина пуста!</h6>
                )}
            </ul>
            <p style={{ marginTop: '20px' }}>ИТОГО {cartsum} Рублей</p>
            <button className={style.glow_on_hover}>Оплатить</button>
            {/* <button onClick={cleatcart} style={{
                width: '160px',
                height: '20px',
                borderRadius: '5px',
                marginTop: '10px',
                outline: 'none',
                color: '#020013',
                background: '#ff0000',
                cursor: 'pointer',
                position: 'relative',
            }}>очистить корзину</button> */}
        </div>
    );
}
