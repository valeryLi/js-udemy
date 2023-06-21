// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

function firstTask() {
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
}

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

for (let i = 20; i <= 20; i--) {
  if (i === 13) {
    break;
  }
  console.log(i);
}

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

for (let i = 2; i <= 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

let num = 2;

while (num < 16) {
  num++;
  if (num % 2) console.log(num);
}

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
let arrayOfNumbers = [];
// arr = [5, 6, 7, 8, 9, 10];
arrayOfNumbers[0] = 5;
arrayOfNumbers[1] = 6;
arrayOfNumbers[2] = 7;
arrayOfNumbers[3] = 8;
arrayOfNumbers[4] = 9;
arrayOfNumbers[5] = 10;
console.log(arrayOfNumbers);

// Задачи со звездочкой
// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд. Должен получиться точно такой же массив
const arr = [3, 5, 8, 16, 20, 23, 50];
console.log(arr.length);

const result = [];
result[0] = 3;
result[1] = 5;
result[2] = 8;
result[3] = 16;
result[4] = 20;
result[5] = 23;
result[6] = 50;

console.log(result);
console.log(result.length);

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done". Для определения типа данных используйте typeof(); Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
const data = [5, 10, "Shopping", 20, "Homework"];
for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    data[i] *= 2;
  } else if (typeof data[i] === "string") {
    data[i] += " - done";
  }
}
console.log(data);

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result. Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
const array = [5, 10, "Shopping", 20, "Homework"];
let result = [];
for (let i = array.length - 1; i >= 0; i--) {
  result[result.length] = array[i];
}
console.log(result);
// В этом коде мы создаем новый пустой массив result и используем цикл for для перебора массива data в обратном порядке. На каждой итерации мы добавляем текущий элемент в конец массива result с помощью индекса result.length.

// Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)
const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);

// ........................................
// *******
// *******
// *******
// *******
const length = 7;
let result = "";

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 7; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
