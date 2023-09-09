/* Algorithm
  1. identify if the input number is %2 and equal to 0
  2. if equal to zero then return true
  3. else must be false
  4. false becase if input %3 == 0
  5. if your input is 2 then is not == 0 thats why it will return false
*/

const evenOrOdd = (n) => {
  if (n % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

evenOrOdd(2);
