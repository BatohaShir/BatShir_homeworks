import { useParams } from "react-router-dom";
import { SiteHeader } from "../../header/header";
import style from './productPage.module.css'
import { useMenuReactQuery } from "../../../store/menu";
import { useShopCart } from "../../../store/cart";


export function ProductPage() {
    const { addItem, shopcart } = useShopCart()
    const {data: menu, isLoading:Loading} = useMenuReactQuery();
    const {productId} = useParams();
    const product = menu ? menu.find((item) => item.name === productId) : null
    const isItemInCart = (itemName) => {
        return shopcart.some(item => item.name === itemName);
    }

    return (
        <div className="productPage">
            {Loading && <div>Карточка продукта загружается...</div>}
            <SiteHeader/>
            {!!product && 
                <section className={style.productContainer}>
                <div className={style.img_card}>
                    <img src={product.image} alt="" id="featured_image"></img>
                    <div className={style.small_card}>
                        <img src={product.small_image_one} alt="" className={style.small_img}></img>
                        <img src={product.small_image_two} alt="" className={style.small_img}></img>
                        <img src={product.small_image_tree} alt="" className={style.small_img}></img>
                    </div>
                </div>
                <div className={style.product_info}>
                    <h3>{product.name}</h3>
                    <h5>Цена: {product.price} <del>120 Рублей</del></h5>
                    <p>{product.dish_info_one}</p>
                    <p>{product.dish_info_two}</p>

                    <div className={style.quantity}>
                        <p>Количество бууз в порции</p>
                        <select name="Quantity" id="quantitys" className={style.quantity_option}>
                            <option value={1}>1 штук в порции</option>
                            <option value={3}>3 штук в порции</option>
                            <option value={5}>5 штук в порции</option>
                            <option value={7}>7 штук в порции</option>
                        </select>
                    </div>

                    <div className={style.total_quantity}>
                        <input type="number" value={1} min={1}></input>
                        <button style={{background: '#17696a', borderRadius: '4px', padding: '10px 45px', border: 'none',color: 'white',fontWeight: '600', marginLeft: '-20px'}} onClick={() => addItem(product)}
                        >{isItemInCart(product.name) ? "Блюдо уже в корзине!" : "Добавить в корзину"}</button>
                    </div>

                    <div>
                        <p>Доставка</p>
                        <p>Доставка еды в Улан-Удэ. Бурятская и русская кухни: буузы, полуфабрикаты, супы, вторые, салаты, торты и выпечка.</p>
                    </div>

                </div>
            </section>
            }
            
        </div>
)
}