/* Algorithm
    1. convert to a string first
    2. reverse method
    3. back to string
    4. back to int
*/

const reverseInt = (n) => {
  return parseInt(n.toString().split("").reverse().join(""));
};

console.log(reverseInt(41));
