/*30. Program to count vowels and consonants in a given String.

			Input: i am ram
			Output: 3 vowels 3 consonants.*/
const prompt=require('prompt-sync')();			
 var str=prompt("enter a string: ");
 vowels='AaEeIiOoUu';
 countCon=0;
 countVow=0;
 for(i=0;i<str.length;i++){
	if(vowels.indexOf(str[i])!=-1){
		countVow++;
	}
	else if(str[i]!=" "){
		countCon++;
	}
	
}
 console.log(`number of consonants=${countCon}`);
 console.log(`number of vowels=${countVow}`);

