// 2-2 Q1. Write a program to calculate the sum of even 
// positive numbers up to 30.
// The answer should be 240.
//P1704474_Thomas

let i = 1; 
let sum = 0;

while (i  < 31) { 
  if(i%2 == 0){
    sum = sum + i;
  }
  i++;
}
console.log(sum);
