let input;
const numbers = [];
let total = 0;

// while (true) {
//     input = prompt('Enter a number! ! !');
//     if(input===null){
//         console.log('Sum of numbers are ' + total);
//         break;
//     }
//     if (isNaN(input)) {
//         alert('ERORR try again...');
//     } else {
//         numbers.push(Number(input));
//         total = total+ Number(input);
//     }
// }

while (input = prompt('Enter a number! ! !')) {
    if (isNaN(input)) {
        alert('ERORR try again...');
    } else {
        numbers.push(Number(input));
        total = total+ Number(input);
    }
}
console.log('Sum of numbers are ' + total);

