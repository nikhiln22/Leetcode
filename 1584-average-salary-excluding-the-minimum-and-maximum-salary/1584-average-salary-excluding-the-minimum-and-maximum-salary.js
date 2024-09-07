/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let totalSalary = salary.reduce((acc, curr) => acc + curr, 0);

    let minSalary = Math.min(...salary);
    let maxSalary = Math.max(...salary);

    let n = salary.length - 2;
    let finalSalary = (totalSalary - (minSalary + maxSalary)) / n;

    return finalSalary;
};