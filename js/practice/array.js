// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let str = "";

  arr.length === 0 ? (str = "Семья пуста") : (str = "Семья состоит из: ");

  arr.forEach((member) => {
    str += `${member} `;
  });

  return str;
}

console.log(showFamily(family));

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach((city) => {
    console.log(city.toLowerCase());
  });
  // const newArr = arr.map((item) => item.toLowerCase());

  // return newArr.join(" ");
}
standardizeStrings(favoriteCities);

// SECOND PART
// Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  }
  // return str.split("").reverse().join("");
  const arr = str.split("");
  const reverse = arr.reverse();
  const newStr = reverse.join("");
  return newStr;

  //
  // Решение при помощи цикла
  // let newStr = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //     newStr += str[i];
  // }
  // return newStr
}

console.log(reverse(someString));

// Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:

// Доступные валюты:
// UAH
// RUB
// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку.
const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let str = "";

  arr.length === 0
    ? (str = "Нет доступных валют")
    : (str = "Доступные валюты:\n");

  arr.forEach((currencie) => {
    if (currencie !== missingCurr) {
      str += `${currencie}\n`;
    }
  });

  return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));
