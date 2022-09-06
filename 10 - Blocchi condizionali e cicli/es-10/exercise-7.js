function sumUntil(maxValue) {
  let array = [];
  for (let i = 0; i <= maxValue; i++) {
    array.push(i);
    console.log(array);
  }
  const summedNums = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(summedNums);
  return summedNums;
}

console.log(sumUntil(5));
