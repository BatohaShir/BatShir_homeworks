import { TbShoppingCartPlus } from "react-icons/tb";
import style from './ProductCard.module.css'

export function ProductCard({ Menu, Button, addItem }) {
  return (
    <div className={style.container}>
      <div className={style.art_board}>
        <div className={style.art_board_container}>
          {Menu.map((item, index) => (
            <div className={style.card} key={index}>
              <div className={style.card_image}>
                <img src={item.image} alt={item.name}/>
              </div>
              <div className={style.card_info}>
                <div className={style.card_info_title}>
                  <h3>{item.name}</h3>
                  <p>Состав блюда: {item.ingredients}</p>
                </div>
                <div className={style.card_info_price}>
                  <p>{item.price}₽</p>
                </div>
              </div>
              <div className={style.buttons}>
                <Button className={style.buy} text="Купить" style={{
                  width: '85%',
                  height: '20px',
                  backgroundColor: 'green',
                  border: 'none',
                  borderRadius: '5px',
                  marginLeft: '10px',
                  cursor: 'pointer'
                }}/>
                <TbShoppingCartPlus className={style.add_to_cart} onClick={() => {
                  addItem(item);
                }}/>
              </div>
            </div>
          ))}         
        </div>
      </div>
    </div>
  );
}
