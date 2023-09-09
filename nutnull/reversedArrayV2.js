/* Algorithm
  1. create a storage of the reversedArray
  2. iterate the values of the array
  3. store the iterated value in reversedArray in every iteration but the iteration is iteration--
  4. if the iteration is done print the reverseArray values
  5. done
*/

const reverse = (arr) => {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    a[i] = arr[arr.length - (i + 1)];
  }
  return a;
};

console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([4, 3, 2, 1]));
