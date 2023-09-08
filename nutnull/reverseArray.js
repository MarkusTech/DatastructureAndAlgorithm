let array = [1, 2, 3, 4, 5];
console.log("Source of the Array: ", array);

// ---------------------------------------

let reverseArray1 = array.reverse();

console.log("Option 1: ", reverseArray1);

// ---------------------------------------

let reverseArray2 = [];
for (let i = array.length - 1; i >= 0; i--) {
  reverseArray2.push(array[i]);
}

console.log("Option 2: ", reverseArray2);

// ---------------------------------------

let reverseArray3 = [];
array.map((value) => {
  reverseArray3.unshift(value);
});

console.log("Option 3: ", reverseArray3);

// ---------------------------------------

let reverseArray4 = array.map((value, i) => {
  array[array.length - i - 1];
});

console.log("Option 4: ", reverseArray4);
