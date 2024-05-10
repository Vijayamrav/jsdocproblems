/*
Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
Example:

removeDups([1, 0, 1, 0]) ➞ [1, 0]

removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"] */
var findSingleNumber=(array)=>{
   res='';
   
   for(i=0;i<array.length;i++){
    if(!res.includes(array[i])){
        res=res+array[i];
    }
   }

   store=res.split(',');
//    for(j=0;j<store.length;j++){
//     store[j]=Number(store[j]);
//    }
   console.log(store);
}
findSingleNumber([1,0,1,0]);
findSingleNumber(['vijay','varma']);
