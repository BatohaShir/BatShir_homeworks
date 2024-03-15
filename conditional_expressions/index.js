const prompt = require('prompt-sync')({ encoding: 'utf-8' });

console.log('Ввод имени только латиница!!!');
let name = prompt("Здравствуйте, как вас зовут? : ");
console.log(`Привет ${name}, вот наше меню: `);

let name_first = 'buuz'
let name_second = 'shulen'
let name_third = 'tsuivan'
let name_fourth = 'vodka'
let name_fifth = 'heineken'

let first = {
  name: name_first,
  dough: 'Пшеничная мука',
  meat: 'Говядина',
  vegetables: 'Лук',
  steamed: true,
  'cooking time': 25,
  
};
first.price = 40;

let second = {
  name: name_second,
  meat: 'Говядина',
  vegetables: ['картошка', 'лук', 'чеснок'],
  noodle: true,
  'cooking time': 90,
  price: 60,
  cheese: true
};

let third = {
  name: name_third,
  meat: 'Баранина',
  vegetables: ['картошка', 'лук', 'чеснок', 'зелёный лук', 'морковь'],
  noodle: true,
  'cooking time': 40,
  price: 80
}

let fourth = {
    name: name_fourth,
    producent: 'Россия',
    price: 150
}

let fifth = {
    name: name_fifth,
    producent: 'Германия',
    price: 100
}

let menu = [first, second, third, fourth, fifth]
console.log(`${menu[0].name} : ${menu[0].price} рублей
${menu[1].name} : ${menu[1].price} рублей
${menu[2].name} : ${menu[2].price} рублей
${menu[3].name} : ${menu[3].price} рублей
${menu[4].name} : ${menu[4].price} рублей
`)

console.log("Перечислите по запятым!!!")
let order = prompt("Что вы будете брать? : ")
let orderItems = order.split(/[, ]+/);

let amounts = 0;
let menu_order = ''


orderItems.forEach(item => 
    {item = item.trim();
    
    menu.forEach(menuItem => {
        if (menuItem.name.toLowerCase() === item.toLowerCase()) {
            menu_order += `${menuItem.name} ` ;
            amounts += menuItem.price;
        }   
    })  
});

if (menu_order.endsWith(' ')) {
    menu_order = menu_order.slice(0, -1);
};

let menu_order_split = menu_order.split(/[' ']+/);
console.log(`ваш заказ: ${menu_order_split.join(', ')}`);
console.log(`С вас ${amounts} рублей`)