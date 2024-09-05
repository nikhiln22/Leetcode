var climbStairs = function (n) {
    let ans = [1, 2];

    for (let i = 2; i < n; i++) {
        ans[i] = ans[i - 1] + ans[i - 2];
    }
    return ans[n - 1];

};   