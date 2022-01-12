// Problem 7

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
// we can see that the 6th prime is 13.

// What is the 10 001st prime number?

const length = 10001;

function primeCheck(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

function listPrimes(length) {
  let primeList = [];
  let i = 0;
  do {
    i++;
    if (primeCheck(i) == true) {
      primeList.push(i);
    }
  } while (primeList.length < length);
  return primeList[length - 1];
}
console.log(listPrimes(length));
