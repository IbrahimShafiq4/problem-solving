function stringCleanReplaceAll(s) {
    return s.replaceAll(/\d/g, '');
}

console.log(stringCleanReplaceAll('This looks5 grea8t!'));
console.log(stringCleanReplaceAll('123456789'));

function stringCleanFilter(s) {
    return s.split('').filter(char => !/\d/.test(char)).join('');
}

console.log(stringCleanFilter('This looks5 grea8t!'));
console.log(stringCleanFilter('123456789'));

function stringCleanMatch(s) {
    return (s.match(/\D/g) || []).join('');
}

console.log(stringCleanMatch('This looks5 grea8t!'));
console.log(stringCleanMatch('123456789'));

function stringCleanLoop(s) {
    let result = '';
    for (let char of s) {
        if (!/\d/.test(char)) {
            result += char;
        }
    }
    return result;
}

console.log(stringCleanLoop('This looks5 grea8t!'));
console.log(stringCleanLoop('123456789'));

const result = 'This looks5 grea8t!'


function stringcleanSplit(s) {
    return s.split('')
        .filter(el => isNaN(el) || el === ' ')
        .join('');
}

console.log(stringcleanSplit('This looks5 grea8t!')); 
console.log(stringcleanSplit('123456789')); 