function squareSum(numbers) {
    // First Way
    // return numbers.map((el) => el ** 2).reduce((acc, cur) => acc + cur, 0);

    // Second way 
    // return numbers.reduce((acc, cur) => acc + cur ** 2 , 0)

    // Third Way
    let sum = 0;
    numbers.forEach((num) => { // forEach doesn't return a value so i've used another variable to return it
        sum += num ** 2;
    });
    return sum;
}

console.log(squareSum([1, 2, 2, 5]))