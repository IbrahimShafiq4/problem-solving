function moveZeros(arr) {
    // First, filter out all non-zero elements
    let nonZeroElements = arr.filter(element => element !== 0);

    // Then, filter out all zero elements
    let zeroElements = arr.filter(element => element === 0);

    // Combine non-zero elements with zero elements at the end
    return [...nonZeroElements, ...zeroElements];
}

let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

console.log(moveZeros(arr));

function moveZerosInOnLine(arr) {
    return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0));
}

console.log(moveZerosInOnLine(arr));