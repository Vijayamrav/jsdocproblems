/* 22 . C Program to find factorial of number.
		
			Input: n=5
			Output: 120

			Explanation: 5 x 4 x 3 x 2 x 1 = 120  */

const prompt=require('prompt-sync')();
var number=prompt('enter a number: ');
factorial=1;
for(i=1;i<=number;i++){
   factorial=factorial*i;
} 
console.log(factorial);           