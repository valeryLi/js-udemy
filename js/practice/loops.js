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
