function stringToArraySplit(string) {
    return string.split(' ');
}

console.log(stringToArraySplit("Robin Singh"));

function stringToArrayArrayFrom(string) {
    return Array.from(string.split(' '));
}

console.log(stringToArrayArrayFrom("Robin Singh"));

function stringToArraySpread(string) {
    return [...string.split(' ')];
}

console.log(stringToArraySpread("Robin Singh"));

function stringToArrayRegex(string) {
    return string.match(/\S+/g) || [];
}

console.log(stringToArrayRegex("Robin    Singh"));
