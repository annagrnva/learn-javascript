// Написать программу которая выведет такую строку:

// Пример:
// Ввод: 5
// Вывод: 111222333444555

// Пример:
// Ввод: 9
// Вывод: 111222333444555666777888999

// let result = '';
// for (let i = 1; i <= 5; i++) {

//     for (let j = 1; j <= 3; j++) {
//      result += i ;
//     };

// };
// console.log(result)



// Написать программу которая выведет такую строку:

// Пример:
// Ввод: 5
// Вывод: 11 12 13 21 22 23 31 32 33 41 42 43 51 52 53


let result = '';
for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 3; j++) {
        result += ' ' + i + j;
    };

};
 
console.log(result);