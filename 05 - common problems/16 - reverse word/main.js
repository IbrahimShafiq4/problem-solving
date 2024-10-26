// Solution using split, reverse, and join
function solution(str) {
    return str.split('').reverse().join('');
}

console.log(solution('123456789'));
console.log(solution('hellow'));
console.log(solution('world'));
console.log(solution('hello world'));

// Solution using a traditional for loop
function solutionLoop(s) {
    let o = '';
    for (let i = s.length - 1; i >= 0; i--) 
        o += s[i];
    return o;
}

console.log(solutionLoop('123456789'));
console.log(solutionLoop('hellow'));
console.log(solutionLoop('world'));
console.log(solutionLoop('hello world'));

// Solution using spread operator
function solutionSpreadOperator(str) {
    return [...str].reverse().join('');
}

console.log(solutionSpreadOperator('123456789'));
console.log(solutionSpreadOperator('hellow'));
console.log(solutionSpreadOperator('world'));
console.log(solutionSpreadOperator('hello world'));

// Solution using for...of loop
function solutionLoopForOf(s) {
    let o = '';
    // Using for...of loop, we need to reverse the string manually
    for (const char of s) {
        o = char + o; // Prepend the character to reverse the string
    }
    return o;
}

console.log(solutionLoopForOf('123456789'));
console.log(solutionLoopForOf('hellow'));
console.log(solutionLoopForOf('world'));
console.log(solutionLoopForOf('hello world'));
