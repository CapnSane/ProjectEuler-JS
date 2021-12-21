// Problem 5

// 2520 is the smallest number that can be divided by each
// of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly
// divisible by all of the numbers from 1 to 20?

const n = 20;
const x = listGen(n);

function listGen(n) {
  const x = [];
  for (let i = 1; i <= n; i++) {
    x.push(i);
  }
  return x;
}

function smallestCommons(x) {
  var max = Math.max(...x);
  var min = Math.min(...x);
  var candidate = max;

  var smallestCommon = function (low, high) {
    function scm(l, h) {
      if (h % l === 0) {
        return h;
      } else {
        return scm(l, h + high);
      }
    }
    return scm(low, high);
  };

  for (var i = min; i <= max; i += 1) {
    candidate = smallestCommon(i, candidate);
  }

  return candidate;
}

let result = smallestCommons(x);

console.log(result);
