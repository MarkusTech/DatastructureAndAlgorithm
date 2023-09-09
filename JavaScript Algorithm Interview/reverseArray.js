const numbers = [1, 2, 3, 4, 5, 6, 7];
const names = ["Wenn Mark", "Jenance", "Jairo"];

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
