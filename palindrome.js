function painldrome(num)
{
    var temp= num;
    var rev=0;

    while(num!=0)
    {
        rev=rev*10+num%10;  1
        temp=num/10;
    }
     console.log(rev)


    if(temp==num)
    {
        console.log('it is a palindrome');
    }
    else
    {
     console.log('not a palondrome')
    }
} 

painldrome(12321)