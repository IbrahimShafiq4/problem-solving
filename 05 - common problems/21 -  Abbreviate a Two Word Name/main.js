function abbrevName(name) {
    return name.split(' ').map((el) => el[0].toUpperCase()).join('.')
}

console.log(abbrevName('Ibrahim Shafiq Abd-Elshafy'))