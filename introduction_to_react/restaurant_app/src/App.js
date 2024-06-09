import React from 'react';
import './App.css';
import { NavComp } from './components/Navigation_menu_component';
import logo from './assets/logo.jpg';
import { Button } from './components/Button';

function App() {
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
      <header>
      
        <div className="All_nav_menu">
            <div className="Logo">
              <img src={logo} alt="Logo of website" style={{
                width: '70px',
                paddingTop: '15px',
                borderRadius: '50%',
                marginLeft: '15px'
              }}/>
            </div>
            <div className="Nav_menu">
              <ul>
                <li><NavComp text="Home" link="#1"/></li>
                <li><NavComp text="About" link="#1"/></li>
                <li><NavComp text="Contacts" link="#1"/></li>
                <li><NavComp text="Location" link="#1"/></li>
              </ul>
            </div>
          </div>
      </header>
      <div className="container">
        <div className="art-board">
          <div className="art-board_container">
            {Menu.map(item => 
              <div className='card'>
                <div className='card_image'>
                  <img src={item.image} alt={item.name}/>
                </div>
                <div className='card_info'>
                  <div className='card_info_title'>
                    <h3>{item.name}</h3>
                    <p>Состав блюда: {item.ingredients}</p>
                  </div>
                  <div className='card_info_price'>
                    <p>{item.price}₽</p>
                  </div>
                </div>
                <div className='buttons_for_buy'>
                    <Button text="Купить" style={{
                      width: '38%',
                      backgroundColor: 'green',
                      border: 'none',
                      borderRadius: '5px',
                      marginLeft: '30px',
                    }}/>
                    <Button text="В корзину" style={{
                      width: '38%',
                      backgroundColor: 'orange',
                      border: 'none',
                      borderRadius: '5px',
                      marginRight: '30px'
                    }}/>
                </div>
              </div>
            )}         
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
