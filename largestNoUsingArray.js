var array = [14,7,2,4,8,3,13]
var maxNum = array[0]
for(let i=1;i<=array.length-1;i++){ 
   if(maxNum<array[i]){

      maxNum = array[i]
       
    
   }

   
}

console.log(maxNum)