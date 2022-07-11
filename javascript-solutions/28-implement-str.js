var strStr = function (haystack, needle) {
    
    // Base condition
    if (haystack == null || needle == null) {
        return -1;
    }
    // Special case
    if (haystack === needle) {
        return 0;
    }
    // Loop through the haystack and slide the window
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        // Check if the substring equals to the needle
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};
