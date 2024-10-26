function maps(x) {
    // First Way
    // return x.map(el => el * 2);

    // Second way
    let arr = [];
    for (const i of x) {
        arr.push(i * 2);
    }

    return arr;
}

console.log(maps([1, 2, 3]))