const secondMax = (arr) => {
  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity); // compara ogni valore dell'array e sceglie il maggiore
  arr.splice(arr.indexOf(max), 1); // rimuove max dall'array
  return Math.max.apply(null, arr); // restituisce il secondo più grande
};

const arr = [5, 9, 3, 13, 43, 2, 21];
console.log("secondMax:", secondMax(arr));
console.log("Original array", arr);