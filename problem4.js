// Problem 4

// A palindromic number reads the same both ways.
// The largest palindrome made from the product
// of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const n = 3;

function palindrome(a) {
  let digits = a.toString().split('');
  // var realDigits = digits.map(Number);
  let invertedDigits = a.toString().split('').reverse();
  let newDigits = '';
  let newInvertedDigits = '';
  digits.forEach((element) => {
    newDigits += element;
  });
  invertedDigits.forEach((element) => {
    newInvertedDigits += element;
  });
  if (newDigits == newInvertedDigits) {
    return true;
  } else {
    return false;
  }
}

function product(n) {
  let palindromes = {};
  for (let i = 10 ** (n - 1); i < 10 ** n; i++) {
    for (let j = i; j < 10 ** n; j++) {
      if (palindrome((i * j).toString())) {
        palindromes[i * j] = [i, j];
      }
    }
  }
  return palindromes;
}

function getMax(obj) {
  return Math.max.apply(null, Object.keys(obj));
}

// console.log(product(n));

console.log(getMax(product(n)));
