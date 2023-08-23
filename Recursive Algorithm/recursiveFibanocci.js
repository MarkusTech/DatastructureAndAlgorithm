const recursiveFibanocci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibanocci(n - 1) + recursiveFibanocci(n - 2);
};

console.log(recursiveFibanocci(0));
console.log(recursiveFibanocci(1));
console.log(recursiveFibanocci(6));
