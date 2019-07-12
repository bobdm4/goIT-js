// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы 
// в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к 
// примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно
//  используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 
// 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// const countryChina = 'Китай';
// const countryChili = 'Чили';
// const countryAustria = 'Австрия';
// const countryIndia = 'Индия';
// const countryYamaika = 'Ямайка';

// const priceChina = 100;
// const priceChili = 250;
// const priceAustria = 170;
// const priceIndia = 80;
// const priceYamaika = 120;

// let userChoise = prompt('Введите страну доставки');
// switch (userChoise.toLowerCase()) {
//     case countryChina.toLowerCase():
//         alert('Доставка в ' + countryChina + ' будет стоить ' + priceChina + ' кредитов');
//         break;
//     case countryChili.toLowerCase():
//         alert('Доставка в ' + countryChili + ' будет стоить ' + priceChili + ' кредитов');
//         break;
//     case countryAustria.toLowerCase():
//         alert('Доставка в ' + countryAustria + ' будет стоить ' + priceAustria + ' кредитов');
//         break;
//     case countryIndia.toLowerCase():
//         alert('Доставка в ' + countryIndia + ' будет стоить ' + priceIndia + ' кредитов');
//         break;
//     case countryYamaika.toLowerCase():
//         alert('Доставка в ' + countryYamaika + ' будет стоить ' + priceYamaika + ' кредитов');
//         break;
//     default:
//         alert('В вашей стране доставка не доступна');
// }