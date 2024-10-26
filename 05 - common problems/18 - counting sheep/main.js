// Solution 1: Using for...of Loop (Corrected)
function countSheepsForOf(sheep) {
    if (!sheep || sheep.length === 0) return 0;

    let counter = 0;
    for (const item of sheep) {
        if (item === true) counter += 1;
    }
    return counter;
}

// Solution 2: Using filter and length
function countSheepsFilter(sheep) {
    return sheep.filter(Boolean).length;
}

// Solution 3: Using reduce
function countSheepsReduce(sheep) {
    return sheep.reduce((count, item) => count + (item === true ? 1 : 0), 0);
}

// Solution 4: Using forEach
function countSheepsForEach(sheep) {
    let counter = 0;
    sheep.forEach(item => {
        if (item === true) counter += 1;
    });
    return counter;
}

// Solution 5: Using a standard for loop
function countSheepsForLoop(sheep) {
    let counter = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) counter += 1;
    }
    return counter;
}

// Solution 6: Using map (not recommended for counting, but for alternative purposes)
function countSheepsMap(sheep) {
    let counter = 0;
    sheep.map(item => {
        if (item === true) counter += 1;
    });
    return counter;
}

// Example Usage
const sheepArray = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
];

console.log("For...of Loop:", countSheepsForOf(sheepArray));     // Output: 17
console.log("Filter Method:", countSheepsFilter(sheepArray));     // Output: 17
console.log("Reduce Method:", countSheepsReduce(sheepArray));     // Output: 17
console.log("forEach Method:", countSheepsForEach(sheepArray));   // Output: 17
console.log("Standard For Loop:", countSheepsForLoop(sheepArray));// Output: 17
console.log("Map Method:", countSheepsMap(sheepArray));           // Output: 17
