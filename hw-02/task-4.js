// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную
//  строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в 
//  этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.





function findLongestWord(message){
    const word = message.split(' ');
    let longestWord = word[0];

    for (const element of word) {
        if (element.length > longestWord.length) {
            longestWord = element;
        }
    }
    return longestWord
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); //'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'