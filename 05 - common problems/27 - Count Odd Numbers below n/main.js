// Solution 1: Direct Calculation
function oddCountDirect(n) {
    return Math.floor(n / 2);
}

// Solution 2: For Loop
function oddCountLoop(n) {
    let count = 0;
    for (let i = 1; i < n; i += 2) {
        count++;
    }
    return count;
}

// Solution 3: Using Array.from with Counter (similar to your initial approach)
function oddCountArrayFrom(n) {
    let counter = 0;
    Array.from({ length: n }, (_, i) => {
        if (i % 2 !== 0) counter++;
    });
    return counter;
}

// Solution 4: Using Array.from and filter
function oddCountFilter(n) {
    return Array.from({ length: n }, (_, i) => i)
        .filter(i => i % 2 !== 0).length;
}

console.log("Solution 1 (Direct):", oddCountDirect(15)); 
console.log("Solution 2 (Loop):", oddCountLoop(15));     
console.log("Solution 3 (Array.from with Counter):", oddCountArrayFrom(15));
console.log("Solution 4 (Array.from and Filter):", oddCountFilter(15));
