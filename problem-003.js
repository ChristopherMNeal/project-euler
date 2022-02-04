// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Trying to solve this using recursive javascript

// Prime sifting code to create prime number array:
const getPrimeList = (end) => {
  let primeList = [];
  const primeSieve = (newRange) => {
    if (newRange.length === 0) {
      return primeList;
    } else {
      primeList.push(newRange[0]);
      return primeSieve(newRange.filter((e) => e % newRange[0] != 0));
    }
  };
  return (numList = () => {
    const numRange = [...Array(end + 1).keys()]; // creates an array of numbers from 0 to `end`
    const newRange = numRange.slice(2); // slices 0, 1 from the beginning
    return primeSieve(newRange); // calls findPrimes with the numbers array
  });
};

const getPrimesToTenK = getPrimeList(10000);
const primeList = getPrimesToTenK();


// This works, but only because the target number is evenly divisible into its prime factors
// for other numbers it exceeds the call stack size
// again, this may be better solved without recursion, but I'm practicing recursion.
const findPrimeFactors = (number, i) => {
  if (number === primeList[i] || primeList[i] > number) {
    return primeList[i];
  } else if (number % primeList[i] === 0) {
    console.log(primeList[i]);
    return findPrimeFactors(number / primeList[i], i + 1);
  } else {
    return findPrimeFactors(number, i + 1);
  }
};

console.log(findPrimeFactors(600851475143, 0));
