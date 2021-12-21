// Problem 3

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

let lista = [];
let value = 600851475143;

function prime_factors(n, lista) {
  while (n % 2 == 0) {
    lista.push(2);
    n = n / 2;
  }
  for (let i = 3; i < parseInt(Math.sqrt(n)); i += 2) {
    while (n % i == 0) {
      lista.push(parseInt(n));
      n = n / i;
    }
  }
  if (n > 2) {
    lista.push(parseInt(n));
  }
  console.log(lista[lista.length - 1]);
}

prime_factors(value, lista);
