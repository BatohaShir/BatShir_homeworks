async function getMenu() {
  const response = await fetch('\menu.json');
  return response.json();
}

async function getIngredientsPrice() {
  const response = await fetch('\ingredientprices.json');
  return response.json();
}

async function fetchMenu() {
  const menu  = await getMenu();
  return menu;
}

async function fetchIngredient() {
  const ingredientsPrices = await getIngredientsPrice();
  return ingredientsPrices;
}

async function main() {
  let menu = await fetchMenu();
  let ingredientsPrices = await fetchIngredient();
  function calculateCookingCost(ingredients) {

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
  
  //МАССИВ ИЗ ВЕГЕТАРИАНСКИХ БЛЮД
  let nonVegetarian = ['beef', 'chicken', 'mutton', 'pork']
  let askVegetarianProduct = prompt(`Вот вегетарианские продукты в нашем ресторане: ${nonVegetarian}. 
  Если у вас есть что добавить нажмите на английскую букву "Y", если нечего добавить то нажмите на букву "N": `)
  if (askVegetarianProduct.toUpperCase() === 'Y') {
    let addNewProduct = prompt('напишите свой продукт на английском языке: ')
    nonVegetarian.push(addNewProduct)
  }
  console.log(nonVegetarian)
  
  //использование some
  const isVegetarianDish = menu.some(dish => ckeckIsVegetarianDish(dish, nonVegetarian))
  if (isVegetarianDish === true) {
    console.log('Меню имеет в себе вегетаринские блюда!!!')
  }else{
    console.log('Меню НЕ имеет в себе вегетаринские блюда!!!')
  }
  
  //использование every
  let allDishVegetatianCheck = menu.every(dish => ckeckIsVegetarianDish(dish, nonVegetarian))
  if (allDishVegetatianCheck === true) {
    console.log('У нас все блюда вегетарианские!!!')
  }else{
    console.log('К сожалению не каждое блюдо вегетарианское')
  }
  
  //использование filter
  console.log('Вегетарианские блюда:')
  const filtUse = menu.filter(dish => ckeckIsVegetarianDish(dish, nonVegetarian))
  console.log(filtUse)

  //Функция проверки на вегетарианское блюдо
  function ckeckIsVegetarianDish(dish, nonVegetarian) {
    return !nonVegetarian.some(nonVeg => dish.ingredients.includes(nonVeg));
  }
}

main();



