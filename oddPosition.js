var x = [3,20,10,44,57,43,33,56,78];
console.log(oddPosition(x));

function oddPosition(array)
{
    let arr=[];
    for(let i=0;i<array.length;i++)
    {
        if(i%2!=0)
        {
            arr.push([array[i]]);
        }

    } 
       return arr;

}



