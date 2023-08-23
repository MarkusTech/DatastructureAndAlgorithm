function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

summation(4);

/* 
    EXPECTED OUTPUT
    summation = 10
    process: 1 + 2 + 3 + 4 = 10

    explanation: the value of n in function is 4 and the loop will iterate 4 time and every iteration
    will be added or be recorded in the sum variable and when the loop stop it will display the total sum
*/
