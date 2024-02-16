var x = [3,20,10,44,57,43,33,56,78];

console.log("EVEN POSITION")
    for(let i=0;i<x.length;i++)
    {
        if(i%2==0)
        {
           console.log(x[i]) 
        }

    } 

    console.log("ODD POSITION")

    for(let i=0;i<x.length;i++)
    {
        if(i%2!=0)
        {
            console.log(x[i])
        }
    }
  