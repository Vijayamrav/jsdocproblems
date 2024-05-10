/*Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

Example:

findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3 */

var findSingleNumber=(array)=>{
    res='';
    for(i=0;i<array.length;i++){
        count=0;
        
        for(j=0;j<array.length;j++){
            if(array[i]==array[j]){
                count++;
            }
        }
        if(count==1){
           res=res+array[i]+" ";
        }
    }
    console.log(res);
}
findSingleNumber([2,2,2,3,5,4,4,4,]);
