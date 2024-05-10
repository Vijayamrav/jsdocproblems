/*Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
Example:

charCount("c", "Chamber of secrets") ➞ 1 */
var countChar=(str,char)=>{
    count=0;
    for(i of str){
        if(i==char){
          count++;
        }
    }
    console.log(count);
}
countChar('Chamber of secrets','c');
