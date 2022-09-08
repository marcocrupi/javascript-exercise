function calculate() {
  let result = 0;

  let calculator = {
    add: function (number) {
      result += number;
      return this;
    },
    multiply: function (number) {
      result *= number;
      return this;
    },
    sub: function (number) {
      result -= number;
      return this;
    },
    divide: function (number) {
      result /= number;
      return this;
    },
    printResult: function () {
      return result;
    },
  };
  return calculator;
}

const calculator = calculate();
let result = calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
console.log(result);