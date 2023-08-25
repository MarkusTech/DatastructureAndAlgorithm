function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rigthArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rigthArr));
}

function merge(leftArr, rigthArr) {
  const sortedArr = [];
  while (leftArr.length && rigthArr.length) {
    if (leftArr[0] <= rigthArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rigthArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rigthArr];
}

//output
const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));
