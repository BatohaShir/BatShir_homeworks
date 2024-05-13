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
  

let menu = [first, second, third, test];

let ingredientsPrices = {
    flour: 30,
    beef: 40,
    mutton: 35,
    onion: 10,
    potato: 14,
    garlic: 6,
    green_onions: 7,
    carrot: 13,
    noodle: 23
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
let tocheckdish = 'beef'
const isVegetarianDish = menu.some(isVegetarian)
console.log(isVegetarianDish)
//использование every
let allDishVegetatianCheck = menu.every(isVegetarian)
console.log(allDishVegetatianCheck)

//использование filter
const filtUse = menu.filter(dish => isVegetarian(dish))
console.log(filtUse)

function isVegetarian(dish) {
    return !dish.ingredients.includes('beef') && !dish.ingredients.includes('mutton');
}





