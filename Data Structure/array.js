const arr = [1, 2, 3, "Markus"];
console.log(arr[0]);

// Push add data in last element in an array
arr.push(4);
// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
arr.unshift(0);
// The pop() method removes (pops) the last element of an array. The pop() method changes the original array.
arr.pop();
//The shift() method of Array instances removes the first element from an array and returns that removed element.
arr.shift();
console.log(arr);

// for of
for (let item of arr) {
  console.log(item);
}

// map, filter, reduce, concat, slice and splice
