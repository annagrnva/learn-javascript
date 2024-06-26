// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  // Object.keys(salaries) – ['John', 'Pete', 'Mary']
  // Object.values(salaries) – [100, 300, 250]
  
  function sumSalaries(obj) {
      let sum = 0;
      
      Object.values(obj).forEach((item, index) => {
          sum += item
      })
     
      return sum;
  }
  
  
  console.log( sumSalaries(salaries) ); // 650