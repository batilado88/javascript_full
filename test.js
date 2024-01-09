'use strict';

// Что выведет в консоль код?

// console.log( NaN || 2 || undefined ); // 2

// console.log( NaN && 2 && undefined ); // NaN

// console.log( 1 && 2 && 3 ); // 3

// console.log( !1 && 2 || !3 ); // false

// console.log( 25 || null && !3 ); // 25

// console.log( NaN || null || !3 || undefined || 5); // 5

// console.log( NaN || null && !3 && undefined || 5); // 5

// console.log( 5 === 5 && 3 > 1 || 5); // true


// Выполняется ли условие?

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }

// console.log(hamburger === 3 && cola || fries === 3 && nuggets);


// Выполняется ли условие?

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!');
// }

// console.log(hamburger || cola || fries === 3 || nuggets);

// Переменная hamburger задана через let, так как const подразумевает какое-либо начальное значение. С const будет ошибка, можете проверить.
// А без значения там undefined, напоминаю 🙂

// Выполняется ли условие?

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }

// console.log(hamburger && cola || fries === 3 && nuggets)



// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 6;

// for (let i = 1; i <= length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);



// Заполните массив цифрами от 5 до 10 включительно. 
// Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]


// const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < 6; i++) {
//         arrayOfNumbers[i] = i + 5;
//     }

// console.log(arrayOfNumbers);



// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

// console.log(result);




// const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] *= 2;
//         } else {
//             data[i] += ' - done';
//         }
//     }


// console.log(data);



// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     // let k = 0;
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//         // k++;
//     }

// console.log(result);




//      *
//     ***
//    *****
//   *******
//  *********
// ***********


// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней

// for (let i = 0; i <= lines; i++) {

//     // for (let k = 0; k < lines - i; k++) {
//     //     result += ' ';
//     // }

//     for (let k = lines; k > i; k--) {
//         result += ' ';
//     }

//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);