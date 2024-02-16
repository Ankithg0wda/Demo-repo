var array = [14,7,2,4,8,3,13];
var minNum = array[0];
for(let i=1;i<array.length;i++){   
   if(minNum>array[i]){

      minNum = array[i]; 
       
    
   }

   
}

console.log(minNum);