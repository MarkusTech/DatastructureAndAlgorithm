const findTheDuplicateInArray = (arr) => {
  // let sortedArray = arr.slice().sort();
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] === arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
};

let array = [2, 3, 4, 4, 5, 6, 7, 9, 9];

console.log(findTheDuplicateInArray(array));
