export function LoginInSystem(users) {
    while (true){
        let login = prompt('Введите ваш логин:');
        let password = prompt('Введите ваш пароль:');
        if (users.hasOwnProperty(login) && users[login] === password){
            console.log('╔═════════════════════════════════╗');
            console.log('║        Добро пожаловать в       ║');
            console.log('║            систему!             ║');
            console.log('╚═════════════════════════════════╝');
            console.log(`==========ПРИВЕТ! ${login}==========`)
            break;
        }else{
            console.log('НЕВЕРНЫЙ ЛОГИН ИЛИ ПАРОЛЬ!!!')
        }
    }
}
