/*26. Program to Check Whether a Number is Prime or Not

			Input: 9
			Output: 9 is not a prime no

			Input: 7
			Output : 7 is a prime no*/

const prompt=require('prompt-sync')();
var number=prompt('enter a number: ');
checkPrime=true;
 for(i=2;i<number;i++){
    
   if(number%i==0){
      checkPrime=false;
      break;
   }
   }
   if(checkPrime){
      console.log(`${number} is a prime number`);
   }
   else{
      console.log(`${number} is not a prime`);
   }

    
          