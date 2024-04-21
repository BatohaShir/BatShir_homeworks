const inputPrompt = require('prompt-sync')({ encoding: 'utf-8' });

let users = {
    'admin': 'root',
    'user_1': 'qwerty',
    'user_2': '123'
};

console.log('════════════АВТОРИЗАЦИЯ════════════')
while (true){
    let login = inputPrompt('Введите ваш логин:');
    let password = inputPrompt('Введите ваш пароль:');
    if (users.hasOwnProperty(login) && users[login] === password){
        console.log('╔═════════════════════════════════╗');
        console.log('║        Добро пожаловать в       ║');
        console.log('║            систему!             ║');
        console.log('╚═════════════════════════════════╝');
        break;
    }else{
        console.log('НЕВЕРНЫЙ ЛОГИН ИЛИ ПАРОЛЬ!!!')
    }
}


