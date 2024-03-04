let name_first = 'buuz'
let name_second = 'shulen'
let name_third = 'tsuivan'

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
//Создаём массив из наших блюд
let menu = [first, second, third]
//Удаляем первый элемент из нашего массива(Шулэн)
menu.splice(1, 1)
//Удаляем ключ Cheese со значением true
delete second.cheese
//добавляем элемент обратно в массив
menu.unshift(second)
//Прибыль от продаж всех трёх блюд
console.log(`Прибыль от продаж: ${menu[0].price + menu[1].price + menu[2].price}`)
//Расчётное время приготовления всех блюд
console.log(`Общее время приготовления: ${menu[0]['cooking time'] + menu[1]['cooking time']  + menu[2]['cooking time'] } минут`)
//удаление всех элементов кроме одного

menu.shift();
menu.pop();

console.log(menu)