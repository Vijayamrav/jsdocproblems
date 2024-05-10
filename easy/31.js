/*31. program to insert  the elements of an array for specific index.

			Input: [1,2,3,4,5,7,8,9,10] , index=5
			Output: [1,2,3,4,5,6,78,9,10]*/
var insertion=(array,index,element)=>{
l=array.length;
for(i=l-1;i>=index;i--){
    array[i+1]=array[i];
    if(i==index){
        array[i]=element;
    }
}
console.log(array);
}
insertion([1,2,3,4,5],3,5);




