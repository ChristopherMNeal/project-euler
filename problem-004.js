// // A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// // Find the largest palindrome made from the product of two 3-digit numbers.

// recursion method (work in progress):

// const palFinder = (x, y) => {
//   if ((x * y).toString() === (x * y).toString().split("").reverse().join("")) {
//     console.log(`${x} * ${y} = ${x * y}`);
//     return palFinder(x + 1, y);
//   } else {
//     return;
//   }
// };

// Loop method (works!):

const palFinderLoop = () => {
  let palindromeArray = [];
  for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < 1000; j++) {
      if (
        (i * j).toString() === (i * j).toString().split("").reverse().join("")
      ) {
        palindromeArray.push([i * j]);
      }
    }
  }
  return (max = Math.max(...palindromeArray));
};

console.log(palFinderLoop()); // returns 906609
// 993 * 913 = 906609
