function painldrome(num)
{
    var temp= num;
    var rev=0;
    var rem;

    while(num>0)
    {
        rem = num%10;
        num = parseInt(num/10)  
        rev = rev*10+rem;
    }
     //console.log(rev)

    if(rev==temp)
    {
        console.log('it is a palindrome');
    }
    else
    {
     console.log('not a palondrome')
    }
} 

painldrome(12321)