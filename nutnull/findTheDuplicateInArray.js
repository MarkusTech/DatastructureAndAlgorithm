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

let array = [4, 2, 3, 7, 4, 9, 5, 6, 7, 9];

console.log(findTheDuplicateInArray(array));
