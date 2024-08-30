var longestPalindrome = function (s) {
    let set = new Set();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            count += 2;
            set.delete(s[i]);
        } else {
            set.add(s[i]);
        }
    }
    console.log('set:', set);
    console.log('count:', count)
    console.log('set.size:', set.size);
    let output = count + set.size
    console.log('output:', output);
    return count + ((set.size > 0) ? 1 : 0);
};