var array = [7,7,2,4,8,3,13];
var minNum = array[0];
for(let i=1;i<=array.length;i++){    

   if(array[i]<minNum){    // 14>0 7>1

       minNum = array[i]; 
       
    
   }

   
}

console.log('Smallest Number of the given array is' ,minNum);