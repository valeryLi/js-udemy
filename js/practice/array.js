// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  const familyName = [...arr];
  if (familyName === []) {
    return "Семья пуста";
  }
  return `Семья состоит из ${familyName.join(", ")}`;
}

console.log(showFamily(family));

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {}
console.log(standardizeStrings(favoriteCities));
