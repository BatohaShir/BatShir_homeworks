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

let menu = [first, second, third];

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
    let cookingCost = 0;
    for (let i = 0; i < ingredients.length; i++) {
        let ingredient = ingredients[i];
        cookingCost += ingredientsPrices[ingredient] || 0;
    }
    return cookingCost;
}

menu.forEach(dish => {
    let cookingCost = calculateCookingCost(dish.ingredients);
    let profit = dish.price - cookingCost;
    console.log(`Профит блюда ${dish.name}: ${profit}`);
});

let menuStrings = [];

menu.forEach((brief, index) => {
    let briefString = `|Блюдо ${index + 1}: ${brief.name}, Ингредиенты: ${brief.ingredients.join(', ')}, Цена: ${brief.price} рублей`;
    menuStrings.push(briefString);
});

console.log('============================================================================================================');
console.log('|                                             Меню ресторана                                                |');
console.log('============================================================================================================');
menuStrings.forEach(menuItem => {
    console.log(menuItem);
});