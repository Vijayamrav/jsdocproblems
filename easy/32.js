/*Reverse a number using while Loop

Input: 123
Output: 321 */
var num=123;
res='';
numStr=num.toString();
i=numStr.length-1;
while(i>=0){
    res+=numStr[i];
    i--;
}
console.log(res);
