const numbers = [1, 2, 3, 4, 5, 6];

// Option 1
console.log(Math.max(...numbers));

// Option 2
const largestNumber = (values) => {
  let highest = 0;
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] > highest) {
      highest = values[i];
    }
  }
  return highest;
};
console.log(largestNumber(numbers));
