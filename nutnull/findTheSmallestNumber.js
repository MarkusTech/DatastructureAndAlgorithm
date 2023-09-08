const numbers = [2, 5, 7, 1, 4, 8, 3];
const findTheSmallestNumber = (values) => {
  let smallest = values[0];
  for (let i = 0; i < values.length; i += 1) {
    if (smallest > values[i]) {
      smallest = values[i];
    }
  }
  return smallest;
};

console.log(findTheSmallestNumber(numbers));
console.log(Math.min(...numbers));
