/* 27. Program to find LCM of two numbers using while loop

			Input: 15 50
			Output: Lcm of 15 and 50 is 150.*/

const prompt=require('prompt-sync')();	
var num1=+prompt('enter number1: ');
var num2=+prompt('enter number2: ')

max=(num1>num2)?num1:num2;
while(true){
	if(max%num1==0 && max%num2==0){
		console.log(`LCM of ${num1} and ${num2} is ${max}`);
		break;
	}
	max++;
}

