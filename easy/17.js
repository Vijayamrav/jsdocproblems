/*Create a function that takes a string and returns the number (count) of vowels contained within it.
Example:

countVowels("Celebration") ➞ 5 */
var vowels='aeiouAEIOU';  //str==celebration
function countVowels(str){
    count=0;
    for(i=0;i<str.length;i++){
        if(vowels.indexOf(str[i])!==-1){
            count++;
        }
    }
    console.log(count);
}
countVowels('Celebration');
