/* 24. Print Patter using loop.

			1
			1 2
			1 2 3
			1 2 3 4
  			1 2 3 4 5   */
const prompt=require('prompt-sync')();
var rows=prompt('enter no of rows: ');

for(i=1;i<=rows;i++){
    var store='';
    for(j=1;j<=i;j++){
      store=store+j+' ';
      
    }
    console.log(store);
}