// https://projecteuler.net/problem=1

const subtractOne = (x) => {
  const sumMultiples = (n) => {
    if (n <= 0) {
      return n;
    } else if (n % 3 === 0 || n % 5 === 0) {
      return n + sumMultiples(n - 1);
    } else {
      return sumMultiples(n - 1);
    }
  };
  return sumMultiples(x - 1);
};

console.log(subtractOne(1000)); // returns 233168
