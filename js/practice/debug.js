"use strict";

const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "20$",
  openNow: true,
};

function isOpen(prop) {
  return prop ? "Открыто" : "Закрыто";
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  const firtsDish = +fDish.price.slice(0, -1);
  const secondDish = +sDish.price.slice(0, -1);
  const averageLunch = +average.slice(0, -1);
  if (firtsDish + secondDish < averageLunch) {
    return "Цена ниже средней";
  } else {
    return "Цена выше средней";
  }
}

console.log(
  isAverageLunchPriceTrue(
    restorantData.menu[0],
    restorantData.menu[1],
    restorantData.averageLunchPrice
  )
);

function transferWaitors(data) {
  const copy = Object.assign({}, data);

  copy.waitors = [{ name: "Mike", age: 32 }]; // Нам просто нужно менять весь массив данных,
  // а не лезть напрямую менять каждого из сотрудников
  // Так как это верхний уровень объекта, то значение
  // будет меняться только у копии
  return copy;
}

console.log(transferWaitors(restorantData));
