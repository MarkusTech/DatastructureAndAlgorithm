const numbers = [1, 2, 3, 4, 5, 6];

// Option 1
/* Algorithm
  1. print using Math module max then use the spread operator built in javascript
*/
console.log(Math.max(...numbers));

// Option 2
/* Algorithm
  1. create a variable for the storage of the largest number
  2. iterate the values in array
  3. set a condition if the iterated value is greated than the stored 
      value of the created variable
  4. if the condition is meet then the variable will record the iterated value
  5. if done iterating all of the values in array Print the variable
  6. done!
*/
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
