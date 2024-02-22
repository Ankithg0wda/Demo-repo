var closetTarget = function(words, target, startIndex) {

    const n = words.length;   // 5  
   
     for (let i =0; i<n; i++)  // i=0 0<5 0++, i=1 1<5 1++, i=2 2<5 2++ 
     {
            if(words[(startIndex+i+n)%n]===target) 
            // words[(1+0+5)%5] -> 1 == hello - false
                 // words[(1+1+5)%5] -> 1 == hello - false
                  // words[(1+2+5)%5] -> 1 == hello - false
                   // words[(1+3+5)%5] -> 1 == hello - false
                    // words[(1+4+5)%5] -> 0 == hello - true
            return i // returning the index value of 4 is hello and this one is longest distance
 
            if(words[(startIndex-i+n)%n]===target)
             // words[(1-0+5)%5] -> 1 == hello - false
            // words[(1-1+5)%5] -> 0 == hello - false
            return i  // returning the index value of 1 is hello and this one is smallest distance
 
     }
     return -1
 };

 console.log(closetTarget(["hello","i","am","leetcode","hello"],"hello",1))
 console.log(closetTarget(["a","b","leetcode"],"leetcode",0))
 console.log(closetTarget(["i","eat","leetcode"],"ate",0))