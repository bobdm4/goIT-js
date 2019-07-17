// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
// Функция возвращает число - количество свойств.

// Вызовы функции для проверки работоспособности твоей реализации.
function countProps(props) {
    const a = Object.values(props).length;
    return a;
}

countProps({}); //
countProps({ name: 'Mango', age: 2 }); // 2
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3                                                                         