export function LoginInSystem(users) {
    while (true) {
        let user_names = Object.keys(users);
        let login = prompt('Введите ваш логин:');
        let password = prompt('Введите ваш пароль:');
        
        if (user_names.includes(login)) {
            if (users[login] === password) {
                console.log('╔═════════════════════════════════╗');
                console.log('║        Добро пожаловать в       ║');
                console.log('║            систему!             ║');
                console.log('╚═════════════════════════════════╝');
                console.log(`==========ПРИВЕТ! ${login}==========`)
                break;
            } else {
                console.log('INCORRECT PASSWORD!!!');
            }
        } else {
            console.log('USER NOT FOUND!!!');
        }
    }
}
