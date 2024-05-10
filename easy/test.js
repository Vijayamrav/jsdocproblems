// arr = [5,5,4,3,2,1] 
// diff = arr[1]-arr[0]
// if(arr[1]>=arr[0]){
//     c=0
//     for(i=0;i<arr.length;i++){
//         if(arr[i+1]>=arr[i])
//         c++
//     }
//     if(c==arr.length-1){
//         console.log("Array is in increasing order")
//     }
//     else{
//         console.log("Array is Unsorted")
//     }
// }
// else{
//     c=0
//     for(i=0;i<arr.length;i++){
//         if(arr[i+1]<=arr[i])
//         c++
//     }
//     if(c==arr.length-1)
//     console.log("Array is in decresaing order")
//     else
//     console.log("Array is Unsorted")
// }

const prompt=require('prompt-sync')();
var array=+prompt('enter array')
var array1=array.split(' ');
console.log(array1);