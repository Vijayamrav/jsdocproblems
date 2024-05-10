/*
Create a function that takes an array of numbers and returns the second largest number.
Example:
secondLargest([10, 40, 30, 20, 50]) ➞ 40 */

var findSecondLargest=(array)=>{
    largest=array[0];
    for(i=0;i<array.length;i++){
        for(j=0;j<array.length;j++){
            if(array[i]>largest){
                largest=array[i];
            }
        }
    }
 // after finding the largest we have to find the difference of largest-arrayof values then smallest differnece will be our second largest   
diff=Number.MAX_VALUE;
var second='';
    for(k=0;k<array.length;k++){
        
       if((largest-array[k]<diff)){
        if(largest==array[k]){
            continue;
        }
           diff=largest-array[k];
           second=array[k];

       }
    
}

    return second;
}
var result=findSecondLargest([1,2,3,4,5]);
console.log(result);
