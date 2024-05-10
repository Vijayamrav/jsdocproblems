// const prompt=require('prompt-sync')();
// var Strarray=prompt('enter array: ');
var findAscORDesc=(array)=>{

if(array[1]>array[0]){
    count=0;
for(i=0;i<array.length;i++){
    if(array[i+1]>=array[i]){
        count++;
    }
}
if(count==array.length-1){
   console.log('Array is in ascending order');
}
else{
    console.log('Array is unsorted');
}
}
else if(array[1]<array[0]){
    count=0;
    for(j=0;j<array.length;j++){
        if(array[j+1]<=array[j]){
            count++;
        }

    }
    if(count==array.length-1){
        console.log("array is in descending order");
    }
    else{
        console.log('Array unsorted')
    }
}
else if(array[1]==array[0]){
    countPositive=0;
    countNegative=0;
    countZero=0;
   for(k=0;k<array.length;k++){
    
    diff=array[k+1]-array[k];
    
    
    if(diff>0){  
       countPositive++;
    }
    else if(diff<0){
        countNegative++;
    }
    else if(diff==0){
         countZero++;
    }
} 
    
    if(countZero==array.length-1){
        console.log('array is sorted');
    }
    else if((countPositive+countZero)==array.length-1){
        console.log("array is in ascending order");
    }
    else if((countNegative+countZero)==array.length-1){
        console.log("array is in descending order");
    }
    else{
        console.log("array is unsorted");
    }
   
}
}
findAscORDesc([12,13,14,14,14,14,15]); // asc
findAscORDesc([36,36,46,46,56,56,78]);// asc
findAscORDesc([12,13,14,14,14,14,15]);
findAscORDesc([12,13,14,14,14,14,15]);
findAscORDesc([11,11,11,11,11,11,11,11]); // sorted
findAscORDesc([12,13,14,14,14,14,15]);
findAscORDesc([12,13,14,14,14,14,15]);




