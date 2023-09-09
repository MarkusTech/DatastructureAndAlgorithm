/* Algorithm
  1. create a variable containing the 1st value in array
  2. iterate the value of an array in loop
  3. set a condition if the variable created is greater than iterated value
  4. if the condition is meet the created variable will record the iterated value
  5. NOTE! (if the smallest variable is greater than iterated value will be record the iterated value)
  6. print the smallest value
  7. done
*/

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

/* Algorithm
  1. Use the Math function Math.min()
  2. inside the mix method use spread operator for the numbers of arrays
  3. done!
*/
console.log(Math.min(...numbers));
