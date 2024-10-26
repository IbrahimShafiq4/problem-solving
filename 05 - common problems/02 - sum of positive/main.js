function positiveSum(arr) {
    let sum = 0;
    // for (const element of arr) {
    //     if (element > 0) {
    //         sum += element;
    //     }
    // }
    // return sum;
    // arr.map((el) => el > 0 ? sum += el : null)
    // return sum

    // return arr.filter((el) => el > 0 ? el : null).reduce((cur, acc) => cur + acc, 0)
    return arr.reduce((cur, acc) => acc > 0 ? cur + acc : cur, 0)
}

console.log(positiveSum([1, -4, 7, 12]));