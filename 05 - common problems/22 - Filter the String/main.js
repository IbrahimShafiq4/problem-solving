function filterString(value) {
    return value.split('').filter((el) => isNaN(el) == false).join('');
}

console.log(filterString('a1b2c3'));

function grow(x) {

}

let arr = [1, 2, 4, 5];
console.log(arr.reduce((acc, curr) => acc * curr, 1))