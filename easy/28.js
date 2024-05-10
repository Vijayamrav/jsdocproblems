/* 28. Program to Display Characters from A to Z Using Loop with count.

			Output: A1 B2 C3 D4 E5 F6 ……. Z26 */
//  var str='ABCDEFGHIJKLMNOPQRSTUVWXYZ';          
store='';
count=0;
for(i=65;i<=90;i++){  // unicode of A is 65 and Z is 90
   store=store+String.fromCharCode(i); //String.fromCharCode()  returns alphabet using unicode
   count++;
   store=store+count+" ";

}
console.log(store);