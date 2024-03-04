var similarPairs = function(words) {

    // remove duplicates and sort letters in words[i]
 for(let i = 0; i < words.length; i++) 
 {
     words[i]= Array.from(new Set(words[i].split(''))).sort().join('')  // 0 = Array.from(new set ( aba.''))
     
 }
 // count -> store amount of simple pairs
let count=0
// traversal through words[] and search for matches (where i < j)
for(let i = 0; i < words.length; i++) // i=0 0<5 1 // 
{
    for(let j = i + 1; j < words.length; j++) // j=0+1 ; 1<5 ; 2 // 
     {
        if (words[i] == words[j]) ab=ab // ab=abcd // abcd=abc // abc=abc
        count ++
    }
}
// return counter as result value
return "The count number in array is "+count
 
}

console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]))
console.log(similarPairs(["aabb","ab","ba"]))
console.log(similarPairs(["nba","cba","dba"]))