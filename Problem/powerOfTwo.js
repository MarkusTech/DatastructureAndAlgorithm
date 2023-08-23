function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 2) {
    if (n % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(isPowerOfTwo(1)); //true
console.log(isPowerOfTwo(2)); //true
console.log(isPowerOfTwo(5)); //false

// ------------------------------------------------

// Bitwise Power Of Two
const isPowerOfTwoBitwise = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};
