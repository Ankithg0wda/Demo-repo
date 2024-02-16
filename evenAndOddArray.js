const { Console } = require("console");

var x = [23,3,4,1,2,6,7,9,0];

console.log("EVEN NUMBERS")

for(let i=0;i<x.length;i++) // i=0  0<9 i++=1 // i=1 1<9 i++=2 // 1=2 2<9 i++=3
{
    if(x[i]%2==0)              //23/2  false     //   1/2 false // 2/ true   
    { 
     
        console.log(x[i]);     
    }
}

console.log("ODD NUMBERS");

for(let i=0;i<x.length;i++)
{
    if(x[i]%2!=0)
    {
        console.log(x[i]);
    }
}