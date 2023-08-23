const fibanocci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibanocci(2)); // [0, 1]
console.log(fibanocci(3)); // [0, 1, 1]
console.log(fibanocci(7)); // [0, 1, 1, 2, 3, 5, 8]
