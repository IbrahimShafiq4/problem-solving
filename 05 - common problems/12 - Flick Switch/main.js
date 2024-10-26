function flickSwitch(arr) {
    let flipped = false;
    return arr.map(item => {
        if (item === 'flick') {
            flipped = !flipped;
        }
        return !flipped;
    });
}

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars'])); 
console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine'])); 
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));
