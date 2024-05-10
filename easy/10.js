/*Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those
 numbers formatted as a phone number (e.g. (555) 555-5555). */

 var formatNumber=(phonenumber)=>{
    var sp='';
    for(i=0;i<phonenumber.length;i++){
        if(i==0){
         sp=sp+'('+phonenumber[i];
        }
         else if(i==2){
            sp=sp+phonenumber[i]+')';
        }
        else if(i==3){
            sp=sp+' '+phonenumber[i];
        }
        else if(i==5){
            sp=sp+phonenumber[i]+'-'
        }
        else{
            sp=sp+phonenumber[i];
        }
    
    
    }
    return sp;
 }
 console.log(formatNumber('7032786479'));