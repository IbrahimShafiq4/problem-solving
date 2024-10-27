// Solution 1: Using map with modulus check
function capitalizeMap(s) {
    const evenCaps = s
        .split('')
        .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char))
        .join('');

    const oddCaps = s
        .split('')
        .map((char, index) => (index % 2 !== 0 ? char.toUpperCase() : char))
        .join('');

    return [evenCaps, oddCaps];
}

// Solution 2: Using for loop and building strings
function capitalizeLoop(s) {
    let evenCaps = '', oddCaps = '';
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            evenCaps += s[i].toUpperCase();
            oddCaps += s[i];
        } else {
            evenCaps += s[i];
            oddCaps += s[i].toUpperCase();
        }
    }
    return [evenCaps, oddCaps];
}

// Solution 3: Using reduce to accumulate strings
function capitalizeReduce(s) {
    const [evenCaps, oddCaps] = s.split('').reduce(
        ([even, odd], char, index) => [
            even + (index % 2 === 0 ? char.toUpperCase() : char),
            odd + (index % 2 !== 0 ? char.toUpperCase() : char)
        ],
        ['', '']
    );
    return [evenCaps, oddCaps];
}

// Solution 4: Using replace with regex and callback
function capitalizeReplace(s) {
    const evenCaps = s.replace(/./g, (char, index) => (index % 2 === 0 ? char.toUpperCase() : char));
    const oddCaps = s.replace(/./g, (char, index) => (index % 2 !== 0 ? char.toUpperCase() : char));
    return [evenCaps, oddCaps];
}

// Solution 5: Using a Set for manual capitalization based on indices
function capitalizeUsingSet(s) {
    const evenCaps = s.split('');
    const oddCaps = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            evenCaps[i] = evenCaps[i].toUpperCase();
        } else {
            oddCaps[i] = oddCaps[i].toUpperCase();
        }
    }
    return [evenCaps.join(''), oddCaps.join('')];
}

console.log("Solution 1 (Map):", capitalizeMap("abcdef"));      
console.log("Solution 2 (Loop):", capitalizeLoop("abcdef"));    
console.log("Solution 3 (Reduce):", capitalizeReduce("abcdef"));
console.log("Solution 4 (Replace):", capitalizeReplace("abcdef"));
console.log("Solution 5 (Set):", capitalizeUsingSet("abcdef")); 
