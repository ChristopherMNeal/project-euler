// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// attempt to solve with recursive javascript and pure functions
// not working
// const smallestDivisiorToTwenty = () => {
//   const smallestDivisior = (n, m) => {
//     if (n % m === 0) {
//       return smallestDivisior(n, m - 1);
//     } else {
//       return smallestDivisior(n + 1, m);
//     }
//   };
// };

// // this recursive method sort of works but it's a bit silly and the maximum call stack size is always exceeded over 10
// const smallestDivisior = (n) => {
//   if (
//     n % 20 === 0 &&
//     n % 19 === 0 &&
//     n % 18 === 0 &&
//     n % 17 === 0 &&
//     n % 16 === 0 &&
//     n % 15 === 0 &&
//     n % 14 === 0 &&
//     n % 13 === 0 &&
//     n % 12 === 0 &&
//     n % 11 === 0 &&
//     n % 10 === 0 &&
//     n % 9 === 0 &&
//     n % 8 === 0 &&
//     n % 7 === 0 &&
//     n % 6 === 0 &&
//     n % 5 === 0 &&
//     n % 4 === 0 &&
//     n % 3 === 0 &&
//     n % 2 === 0 &&
//     n % 1 === 0
//   ) {
//     console.log(n);
//     return n;
//   } else {
//     return smallestDivisior(n + 2520);
//   }
// };
// smallestDivisior(2520);

// // The loop works! I think this one might just be too big for recursion. Takes 3ms to compute
// const smallestDivisior = () => {
//   const startTime = new Date(); // timer added for fun
//   for (let n = 2520; n < 1000000000000; n = n + 1) {
//     if (
//       n % 20 === 0 &&
//       n % 19 === 0 &&
//       n % 18 === 0 &&
//       n % 17 === 0 &&
//       n % 16 === 0 &&
//       n % 15 === 0 &&
//       n % 14 === 0 &&
//       n % 13 === 0 &&
//       n % 12 === 0 &&
//       n % 11 === 0 &&
//       n % 10 === 0 &&
//       n % 9 === 0 &&
//       n % 8 === 0 &&
//       n % 7 === 0 &&
//       n % 6 === 0 &&
//       n % 5 === 0 &&
//       n % 4 === 0 &&
//       n % 3 === 0 &&
//       n % 2 === 0 &&
//       n % 1 === 0
//     ) {
//       const endTime = new Date(); // stop the timer!
//       console.log(endTime - startTime);
//       return n;
//     }
//   }
// };
// console.log(smallestDivisior()); // returns 232792560

// This is cleaner but takes a little longer to compute (29ms)
// I noticed another user on project Euler was iterating by 2520, which makes sense and speeds up computation a ton
const smallestDivisior = (end) => {
  const startTime = new Date(); // timer added for fun
  const range = [...Array(end + 1).keys()];
  const newRange = range.slice(1);
  for (let n = 2520; n < 1000000000000; n = n + 2520) {
    if (
      newRange
        .map((e) => n % e)
        .reduce(function (currentValue, element) {
          return element + currentValue;
        }, 0) === 0
    ) {
      const endTime = new Date(); // stop the timer!
      console.log(endTime - startTime);
      return n;
    }
  }
};
console.log(smallestDivisior(20)); // returns 232792560
