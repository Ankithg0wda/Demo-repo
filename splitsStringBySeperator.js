var splitWordsBySeparator = function(words, separator) {

    const arr = [];

    for (const word of words) // lopping through each word in the input array 
    {
        const splits = word.split(separator); // here we are spliting the word by the give seperator 

        // [ 'one', 'two', 'three' ]
          //   [ 'four', 'five' ]
            //   [ 'six' ]

        for(const split of splits) // looping each word in splits value

        if(split.length>0) // // Adding the non-empty segments to the result array
        {
            arr.push(split)  //    // Return the result array containing all non-empty segments.

        }
    }

    return arr;
}

console.log(splitWordsBySeparator(["one.two.three","four.five","six"],"."))
console.log(splitWordsBySeparator(["$easy$","$problem$"],"$"))
console.log(splitWordsBySeparator(["|||"],"|"))
