// this problem is pretty easy to solve, and the technique is used to solve
// many other problems as well.

var singleNumber = function(nums) {
    const ht = {}; // {1000: 4, 3: 2200}

    for (const num of nums) {
        /* 
        ht[num]+2 increases the count of 1000, or 3
        the || 1 operator will deal with when we don't see the # in our hashTable. I.e. if we don't 
        1337 then ht[1337] will be false, so it'll return [1];
        */
        ht[num] = ht[num] + 1 || 1;
    }

    // for... in loop
    for (const key in ht) {
        if (ht[key] === 1) {
            return key;
        }
    }
};