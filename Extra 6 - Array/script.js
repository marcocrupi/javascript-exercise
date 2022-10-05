// FILTRA SOLO I NUMERI DISPARI DA UN ARRAY DI NUMERI

let buffer = [02, 23, 4, 23, 3, 23423, 42, 31, 23, 12, 34, 5, 2];

function findOddNumbers(array) {
  let result = array.filter((el) => el % 2 == 1);
  console.log(result);
}

findOddNumbers(buffer);