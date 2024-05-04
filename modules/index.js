import { LoginInSystem } from './function.js';

let users = {
    'admin': 'root',
    'user_1': 'qwerty',
    'user_2': '123'
};

let login_process = LoginInSystem(users);

export { users, login_process };
