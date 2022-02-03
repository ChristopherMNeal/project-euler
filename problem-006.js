const sumOfSquares = (num) => {
  if (num <= 0) {
    return num;
  } else {
    return num * num + sumOfSquares(num - 1);
  }
};

const squareOfSum = (num) => {
  if (num <= 0) {
    return num;
  } else {
    return num + squareOfSum(num - 1);
  }
};

console.log(squareOfSum(100) * squareOfSum(100) - sumOfSquares(100));
// returns 25164150
