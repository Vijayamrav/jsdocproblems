/* 21. Program to find greatest of three numbers(using ternery operator).

			Input:  4 8 2
			Output: 8 is gretest  */
const prompt=require('prompt-sync')();
num1=prompt('enter number1: ');
num2=prompt('enter number2: ');
num3=prompt('enter number3: ');

var largest=(num1>num2 && num1>num3)?num1:(num2>num3 && num2>num3)?num2:num3;
console.log(`${largest} is greatest`);