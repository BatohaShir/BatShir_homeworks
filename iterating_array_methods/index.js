//a function that takes two numbers and returns the smaller one
function min_value(a, b) {
    if (a < b) {
        return(`Мешньшее число это ${a}`)
    } else {
        return(`Мешньшее число это ${b}`)
    }
};

let a = Math.floor(Math.random() * 10);
console.log(`Ваше первое рандомное число: ${a}`)
let b = Math.floor(Math.random() * 10);
console.log(`Ваше второе рандомное число: ${b}`)
console.log(min_value(a, b));

// a function for calculate 
let name_first = 'buuz'
let name_second = 'shulen'
let name_third = 'tsuivan'

let first = {
  name: name_first,
  ingredients: ['flour','beef','onion'],
  price: 120
};

let second = {
  name: name_second,
  ingredients: ['beef', 'potato', 'onion', 'garlic'],
  price: 128,
};

let third = {
  name: name_third,
  ingredients: ['mutton', 'onion', 'garlic', 'green_onion', 'carrot'],
  price: 220
};

let test = {
    name: 'test',
    ingredients: ['onion', 'garlic', 'green_onion', 'carrot'],
    price: 220
};

let test_2 = {
  name: 'test2',
  ingredients: ['onion', 'garlic', 'green_onion', 'carrot'],
  price: 220
};

let test_3 = {
  name: 'test3',
  ingredients: ['onion', 'garlic', 'green_onion', 'carrot', 'chicken'],
  price: 220
};

let test_4 = {
  name: 'test4',
  ingredients: ['onion', 'garlic', 'green_onion', 'carrot', 'pork'],
  price: 220
};

let test_5 = {
  name: 'test5',
  ingredients: ['onion', 'garlic', 'green_onion', 'carrot'],
  price: 220
};
  
let test_6 = {
  name: 'test6',
  ingredients: ['onion', 'garlic', 'green_onion', 'carrot'],
  price: 220
};

let test_7 = {
name: 'test7',
ingredients: ['onion', 'garlic', 'green_onion', 'carrot'],
price: 220
};

let test_8 = {
  name: 'test8',
  ingredients: ['onion', 'garlic', 'green_onion', 'carrot'],
  price: 220
};

let test_9 = {
name: 'test9',
ingredients: ['onion', 'garlic', 'green_onion', 'carrot'],
price: 220
};


let menu = [first, second, third, test, test_2, test_3, test_4, test_5];
//создание вегетарианского меню для теста
let vegetarianMenu = [test_5, test_6, test_7, test_8, test_9]

let ingredientsPrices = {
    flour: 30,
    beef: 40,
    mutton: 35,
    onion: 10,
    potato: 14,
    garlic: 6,
    green_onions: 7,
    carrot: 13,
    noodle: 23,
    chicken: 50
};

function calculateCookingCost(ingredients) {
    //let cookingCost = 0;
    // for (let i = 0; i < ingredients.length; i++) {
    //     let ingredient = ingredients[i];
    //     cookingCost += ingredientsPrices[ingredient] || 0;
    // }
    //return cookingCost;
    let ingredient_array = [ingredientsPrices]
    const cookingCost = ingredient_array.reduce((total, ingredient) => total + ingredientsPrices[ingredient] || 0, 0)
    return cookingCost;
}

menu.forEach(dish => {
    let cookingCost = calculateCookingCost(dish.ingredients);
    let profit = dish.price - cookingCost;
    dish.profit = profit;
    console.log(`Профит блюда ${dish.name}: ${profit} и профит добавлен в обьект`);
});
console.log(menu)

//Использование map
const newMenu = menu.map(dish => `${dish.name} : ${dish.price}`)
console.log(newMenu)

//использование some
const isVegetarianDish = menu.some(isVegetarian)
if (isVegetarianDish === true) {
  console.log('Меню имеет в себе вегетаринские блюда!!!')
}else{
  console.log('Меню НЕ имеет в себе вегетаринские блюда!!!')
}

//использование every
let allDishVegetatianCheck = menu.every(isVegetarian)
if (allDishVegetatianCheck === true) {
  console.log('У нас все блюда вегетарианские!!!')
}else{
  console.log('К сожалению не каждое блюдо вегетарианское')
}

//использование filter
console.log('Вегетарианские блюда:')
const filtUse = menu.filter(dish => isVegetarian(dish))
console.log(filtUse)

//============================ПРОВЕРКА ВЕГЕТАРИАНСКОГО МЕНЮ============================

//использование some для вегетаринского меню
const isVegetarianDishTest = vegetarianMenu.some(isVegetarian)
if (isVegetarianDishTest === true) {
  console.log('Тест вегетарианское Меню имеет в себе вегетаринские блюда!!!')
}else{
  console.log('Тест вегетарианское Меню НЕ имеет в себе вегетаринские блюда!!!')
}

//использование every для вегетаринского меню
let allDishVegetatianCheckTest = vegetarianMenu.every(isVegetarian)
if (allDishVegetatianCheckTest === true) {
  console.log('В тест меню все блюда вегетарианские!!!')
}else{
  console.log('К сожалению не каждое блюдо вегетарианское в Тест меню')
}

function isVegetarian(dish) {
    return !dish.ingredients.includes('beef') && !dish.ingredients.includes('mutton') 
    && !dish.ingredients.includes('chicken') && !dish.ingredients.includes('pork');
}





