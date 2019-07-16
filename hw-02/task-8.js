function isLoginValid(login) {
    if (login.length >= 4 && login.length <= 16) {
        console.log('Отличный логин');
        return true;
    } else {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        return false;
    }
}


const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];