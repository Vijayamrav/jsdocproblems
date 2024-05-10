/*Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
Example:
reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY" */
var storeRev='';
var reverse=(str)=>{
    
    for(i=0;i<str.length;i++){
        if(str[i].charCodeAt()>90){
          storeRev=storeRev+str[i].toUpperCase();
        }
        else if(str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90){
            storeRev=storeRev+str[i].toLowerCase();
        }
        else{
            storeRev=storeRev+" ";
        }
    }
    console.log(storeRev);
}
reverse('Happy Birthday');


