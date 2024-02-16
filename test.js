var x = [23,3,4,1,2,6,7,9,0];

console.log("EVEN NUMBERS")

for(let i=0;i<x.length;i++) 
{
    if(x[i]%2==0)                
    { 
     
        console.log('even no are ',x[i]);     
    }
    else
    {
        console.log('odd no are ' ,x[i])
    }
}