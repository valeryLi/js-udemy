// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending) {
  return str.endsWith(ending);
  //   return str[1] === ending[0] && str[2] === ending[1] ? true : false;
  //   const l = ending.length;
  //   const strNew = str.slice(-l);
  //   return strNew.match(ending) ? true : false;
}
console.log(solution("abc", "bc"));

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  }
  if (n >= 5 && n < 10) {
    return n * 95;
  }
  if (n >= 10) {
    return n * 90;
  }
}
console.log(saleHotdogs(10));
