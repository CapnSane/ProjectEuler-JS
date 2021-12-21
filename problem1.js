// Problem 1

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function multiples(range=1000) {
  let list = []
  for (let i = 0; i < range; i++) {
    if (i%3==0 || i%5==0) {
      list.push(i)
    };
  }
  console.log(list.reduce((a, b) => a + b));
}
multiples(1000);