/*  Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.
			
			Input:      n=5
			Output:   2 4 6 8 10 */
 n=10;
 
 function mul(a){
	prod='';
	for(i=1;i<=n;i++){
      prod=prod+a*i+' ';

	}
	console.log(prod);
 }    
 mul(4);  
 mul(3);