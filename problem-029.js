// https://projecteuler.net/problem=29

function powerLoop(a, b) {
  let powers = new Set();
  for (let i = a; i <= b; i++) {
    for (let j = a; j <= b; j++) {
      powers.add(i ** j);
    }
  }
  return powers.size;
}

console.log(powerLoop(2, 100)); // = 9183
