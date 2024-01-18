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


// function getMathResult(num1, num2) {
//     let res = num1;
//     if (typeof(num2) !== 'number' || num2 <= 0) {
//         console.log('Условие сработало!');
//         return res;
//     } else {
//         for (let i = 1; i < num2; i++) {
//             res += '---';
//             res += (i + 1) * num1;
//             console.log(`Значение res равно => ${res} `);
//         }
//         return res;
//     }
// }

// console.log(getMathResult(3, 1));




// 1

// function calculateVolumeAndArea(length) {
//     let vol = length * length * length,
//         sqr = 6 * length * length;
        
//     if (typeof(length) == 'number' && length > 0 && length % 1 == 0) {
//         return `Объем куба: ${vol}, площадь всей поверхности: ${sqr}`;
//     } else {
//         return 'При вычислении произошла ошибка';
//     }
// }

// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea('5'));
// console.log(calculateVolumeAndArea(-1));
// console.log(calculateVolumeAndArea(0));
// console.log(calculateVolumeAndArea(0.1));




// 2

// function getCoupeNumber(seat) {
    
//     if (typeof(seat) !== 'number' || seat < 0 || seat % 1 !== 0) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
    
//     }   else if (seat == 0 || seat > 36) {
//         return 'Таких мест в вагоне не существует';
    
//     }   else  {
//         return Math.ceil(seat / 4);
//     }
// }

// console.log(getCoupeNumber(0));
// console.log(getCoupeNumber(37));
// console.log(getCoupeNumber(5));
// console.log(getCoupeNumber(15));
// console.log(getCoupeNumber(36));




// function checkNum(number) {
//     if (number % 1 == 0) {
//         console.log('целое');
//     } else {
//         console.log('не целое');
//     }
// }

// checkNum(5);
// checkNum(7);
// checkNum(10);
// checkNum(0);
// checkNum(5.5);


// console.log(6 % 1);


// function getTimeFromMinutes(min) {
//     if ( !Number.isFinite(min) || !Number.isInteger(min) || min < 0) {
//         return 'Ошибка, проверьте данные';
//     } 

//     let resultHour = Math.floor(min / 60);
//     let resultMinute = min % 60;

//     let hourSign = '';

//     switch (resultHour) {
//         case 1:
//             hourSign = 'час';
//             break;
//         case 2: 
//         case 3: 
//         case 4: 
//             hourSign = 'часа';
//             break;
//         default: 
//             hourSign = 'часов';
//             break;
//     }

//     return `Это ${resultHour} ${hourSign} и ${resultMinute} минут`;
// }

// console.log(getTimeFromMinutes(55));
// console.log(getTimeFromMinutes(125));
// console.log(getTimeFromMinutes(199));
// console.log(getTimeFromMinutes(555));

// console.log(getTimeFromMinutes(-55));
// console.log(getTimeFromMinutes(0));
// console.log(getTimeFromMinutes(55.5));



// function findMaxNumber(num1, num2, num3, num4) {
//     if (!Number.isFinite(num1) || !Number.isFinite(num2) || !Number.isFinite(num3) || !Number.isFinite(num4)) {
//         return 0;
//     } else {
//         // let arr = [num1, num2, num3, num4];
//         // for (let i = 0; i < 4; i++) {
//         //     if (arr[i] > arr[i+1]) {
//         //         arr[i+1] = arr[i];
//         //     }
//         // }
//         // console.log(arr);
//         // return arr[3];
//         return Math.max(num1, num2, num3, num4);
//     }
// }


// console.log(findMaxNumber(43, 3, '-12', -5));
// console.log(findMaxNumber(1, 5, 6.6, 11));
// console.log(findMaxNumber(1, 5, '6', '10'));




// function fib(num) {
//     if ( typeof(num) !== 'number' && num <= 0 && !Number.isInteger(num) ) {
//         return '';
//     }
    
    
//     if (num == 1) {
//             return '0';
//     } else if (num == 2) {
//             return '0 1';
//     } else {
//             let arr = [0, 1];

//             for (let i = 2; i < num; i++) {
//                 arr[i] = arr[i - 1] + arr[i - 2];
//                 // console.log(arr);
//             }
//             return arr.join(' ');
//     }
// }

// console.log(fib(0));
// console.log(fib(1));
// fib(1);
// fib(2);
// fib(3);
// fib(4);
// fib(5);
// fib(10);

// console.log(fib('55'));
// console.log(fib('string'));
// console.log(fib(null));
// console.log(fib(NaN));
// console.log(fib('5'));
// console.log(fib(0));
// console.log(fib(-5));
// console.log(fib('hello'));


// let obj = {
//     name: 'Jonh',
//     age: 35,
//     isMarried: true,
//     phone: 329549
// };

// let keysCount = Object.keys(obj);
// console.log(keysCount.length);




// const personalPlanPeter = {
//     name: 'Peter',
//     age: '29',
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//     let {exp} = plan['skills'];
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     let {programmingLangs} = plan['skills'];

//     let result = '';

//     if (Object.keys(programmingLangs).length === 0) {
//         return result;
//     }

//     for (let key in programmingLangs) {
//         console.log(`значение key является ${key}`);    
//         result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }

//     return result;
// }

// // showExperience(personalPlanPeter);
// // console.log(showProgrammingLangs(personalPlanPeter));

// personalPlanPeter.showAgeAndLangs = function(plan) {
//     let {age, skills: {languages}} = plan;

//     return `Мне ${age}, и я владею языками: ${languages.join(' ').toUpperCase()}`;
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);



// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if (arr.length === 0) {
//         return 'Семья пуста';
//     }
//     return `Семья состоит из: ${arr.join(' ')}`;
// }

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i].toLowerCase());
//     }
// }


// console.log(showFamily(family));
// standardizeStrings(favoriteCities);


// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         console.log('Ошибка');
//         return 'Ошибка!';
//     }
    
//     let newString = [];
//     for (let i = 0; i < str.length; i++) {
//         newString[i] = str[str.length - i - 1];
//     }
//     return newString.join('');
// }

// console.log(reverse(someString));



// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     if (arr.length === 0) {
//         return 'Нет доступных валют';
//     }
    
//     let result = 'Доступные валюты:\n';
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == missingCurr) continue;
//         result += `${arr[i]}\n`;
//     }
//     return result;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'USD'));



// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
    
//     let area = 0;
//     data.shops.forEach(function(item, i) {
//         let {width, length} = data.shops[i];
//         area += (width * length);
//     });
//     let volume = area * data['height'];

//     let needBudget = volume * data['moneyPer1m3'];

//     if (needBudget <= data['budget']) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
    
// }

// console.log(isBudgetEnough(shoppingMallData));


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Obama', 'Baiden'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     let a = [],
//         b = [],
//         c = [],
//         rest = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else  {
//             rest.push(arr[i]);
//         } 
//     }

//     return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];

// }

// console.log(sortStudentsByGroups(students));


// console.log(typeof(parseInt('15px', 10)));
// console.log(parseInt('15px', 10));

// console.log(typeof(Boolean('4')));
// console.log(Boolean('null'));

// console.log(Number('null'));

// console.log(typeof(!!'44444'));
// console.log(!!+'dd');

// let arr = [0, 1, 2, 3, 4, 5];
// arr.join(' '));


// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     };

//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();debugger;
// const c2 = increment();debugger;
// const c3 = increment();debugger;

// console.log(c1, c2, c3);



// function createCounter() {
//     // let counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     };
//     // counter = 100;
//     return myFunction;
//     }
//     const increment = createCounter();
//     // counter = 5;
//     let counter = 100;
//     const c1 = increment();
//     const c2 = increment();
//     counter = 777;
//     const c3 = increment();
//     console.log('example increment', c1, c2, c3);

// let a = 10;

// let b = 30;
// c = 50;

// console.log(a + b + c);


// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();


// function makeArmy() {
//     let shooters = [];
  
//    for (let i = 0; i < 10; i++) {
//       let shooter = function() { // функция shooter
//         console.log( i ); // должна выводить порядковый номер
//       };
//       shooters.push(shooter); // и добавлять стрелка в массив
//     }
  
//     // ...а в конце вернуть массив из всех стрелков
//     return shooters;
//   }
  
//   let army = makeArmy();
  
//   // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
//   army[0](); // 10 от стрелка с порядковым номером 0
//   army[1](); // 10 от стрелка с порядковым номером 1
//   army[2](); // 10 ...и т.д.



// console.log('b' > 'a');