function isLoginValid(login) {
    if (login.length >= 4 && login.length <= 16) {
        // console.log('Логин успешно добавлен');
        return true;
    } else {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        return false;
    }
}

const isLoginUnique = function (allLogins, login) {
    if (allLogins.includes(login)) {
        console.log('Такой логин уже используэться!!!');
        return true;
    } else {
        console.log('Логин успешно добавлен');
        return false;
    }
};

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const addLogin = function (allLogins, login) {
    if (isLoginValid(login)) {
        (isLoginUnique(allLogins, login))
    }
};


addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'