/* 25. C Program to Calculate the Power of a Number(using loop only).

			Input: n=5, p=3
			Output: 5 ^ 3 = 125
			Explanation: 5 x 5 x 5 = 125  */
   
 const prompt=require('prompt-sync')();
 var number=prompt('enter a number: ');
 var power=prompt('enter the power: ');
 var powerOf=1
 for(i=1;i<=power;i++){
     powerOf=powerOf*number;
 }
 console.log(`${number} ^ ${power}=${powerOf}`);
