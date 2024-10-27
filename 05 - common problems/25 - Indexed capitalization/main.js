// Solution 1: Using a loop and modifying an array
function capitalizeUsingLoop(s, arr) {
    let result = s.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < s.length) {
            result[arr[i]] = result[arr[i]].toUpperCase();
        }
    }
    return result.join('');
}

// Solution 2: Using map with includes for indices
function capitalizeUsingMap(s, arr) {
    return s
        .split('')
        .map((char, index) => arr.includes(index) ? char.toUpperCase() : char)
        .join('');
}

// Solution 3: Using reduce to build the result string
function capitalizeUsingReduce(s, arr) {
    return s.split('').reduce((result, char, index) => {
        return result + (arr.includes(index) ? char.toUpperCase() : char);
    }, '');
}

// Solution 4: Using a Set for optimized index lookup
function capitalizeUsingSet(s, arr) {
    const indices = new Set(arr);
    return s
        .split('')
        .map((char, index) => indices.has(index) ? char.toUpperCase() : char)
        .join('');
}

// Solution 5: Modifying string directly using replace and regex
function capitalizeUsingReplace(s, arr) {
    return s.replace(/./g, (char, index) => (arr.includes(index) ? char.toUpperCase() : char));
}

console.log("Solution 1:", capitalizeUsingLoop("abcdef", [1, 2, 5]));   
console.log("Solution 2:", capitalizeUsingMap("abcdef", [1, 2, 5]));    
console.log("Solution 3:", capitalizeUsingReduce("abcdef", [1, 2, 5])); 
console.log("Solution 4:", capitalizeUsingSet("abcdef", [1, 2, 5]));    
console.log("Solution 5:", capitalizeUsingReplace("abcdef", [1, 2, 5]));
