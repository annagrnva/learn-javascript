// Сумма введённых чисел 
//Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, 
// используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда 
// пользователь введёт не числовое значение, 
// пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте 
// ввод значений при вводе «0».




function sumInput() {

    let arrs = [];
    while (true) {

        let value = prompt('введите значение', 0);

        if (value == !isFinite || value == '') break;

        arrs.push(+value);
    }

    let sum = 0;
    for (let arr of arrs)
        sum += arr;

return sum;
}


alert(sumInput())

