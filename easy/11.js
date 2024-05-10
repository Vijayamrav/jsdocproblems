/*Create a function that returns an array of strings sorted by length in ascending order.
Example:
sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]  */

var sortByLength=(array)=>{
    
    for(i=0;i<array.length-1;i++){

        if(array[i].length>array[i+1].length){
            temp=array[i];
            array[i]=array[i+1];
            array[i+1]=temp;
        }
        
         
      
    }
    console.log(array);
}
sortByLength(['vijay','vv','pra','pravven']);


