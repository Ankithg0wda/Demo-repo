var similarPairs = function(words) {

    // remove duplicates and sort letters in words[i]
  
 for(let i = 0; i < words.length; i++) 
 {
     words[i]= Array.from(new Set(words[i].split(''))).sort().join('')// abc
     //console.log(words[i])   
 }
  let count =0

  for(i=0;i<words.length;i++)
  {
    for(j=i+1;j<words.length;j++)
    {
        if(words[i]==words[j])
            count ++   
    }
  }

  return count 
 
}

console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]))
console.log(similarPairs(["aabb","ab","ba"]))
console.log(similarPairs(["nba","cba","dba"]))