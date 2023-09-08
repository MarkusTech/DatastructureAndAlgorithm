const reverse = (arr) => {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    a[i] = arr[arr.length - (i + 1)];
  }
  return a;
};

console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([]));
