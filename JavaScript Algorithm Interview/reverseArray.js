const numbers = [1, 2, 3, 4, 5, 6, 7];
const names = ["Wenn Mark", "Jenance", "Jairo"];

// Reverse The Values in Array
/* Algorithm
  1. create a variable for the storage of the reverse values
  2. iterate the value in array
  3. store the reverse value in the variable created every iteration
    (iteration must be values.length iteration--)
  4. print the reversed Array
*/
const reverse = (arr) => {
  let reverseArray = [];
  for (let i = 0; i < arr.length; i++) {
    reverseArray[i] = arr[arr.length - (i + 1)];
  }
  console.log(reverseArray);
};

reverse(numbers);
reverse(names);

// find the the largest value in array
/* Algorithm
  1. Create a variable for the storage of the highest number
  2. Iterate the value in array
  3. store to the created variable if iterated value is higher
    than the past stored value
  4. print the stored value
*/
const findTheLargestValue = (values) => {
  let largest = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > largest) {
      largest = values[i];
    }
  }
  console.log(largest);
};

findTheLargestValue(numbers);
