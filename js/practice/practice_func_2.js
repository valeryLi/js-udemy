"use strict";

function calculateVolumeAndArea(length) {
  if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
  }
  //   if (isNaN(number)) {
  //     return "При вычислении произошла ошибка";
  //   }
  let cubeVolume = length * length * length;
  let cubeArea = 6 * length * length;

  return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`;
}
console.log(calculateVolumeAndArea(5));

function getCoupeNumber(seatNumber) {
  //   if (!isNaN(parseFloat(number)) && isFinite(number)) {
  //     return "Ошибка. Проверьте правильность введенного номера места";
  //   }
  if (
    typeof seatNumber !== "number" ||
    seatNumber < 0 ||
    !Number.isInteger(seatNumber)
  ) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }

  if (seatNumber === 0 || seatNumber > 36) {
    return "Таких мест в вагоне не существует";
  }

  return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(2));
// //////////////////////////////////////////////////////////////
function calculateVolumeAndArea(length) {
  if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
  }

  let volume = 0,
    area = 0;

  volume = length * length * length;
  // length ** 3 - это тоже самое, что и выше или варианты через цикл.
  // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
  area = 6 * (length * length);

  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
  if (
    typeof seatNumber !== "number" ||
    seatNumber < 0 ||
    !Number.isInteger(seatNumber)
  ) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }

  if (seatNumber === 0 || seatNumber > 36) {
    return "Таких мест в вагоне не существует";
  }

  return Math.ceil(seatNumber / 4);
  // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);
