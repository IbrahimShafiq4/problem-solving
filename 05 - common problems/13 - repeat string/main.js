function repeatStr(repeatNum, string) {

    // first way
    // let stringData = '';

    // if (typeof(string) === "string") {
    //     for (let i = 0; i < repeatNum; i++) {
    //         stringData += string;
    //     }
    // }
    // return stringData;

    return string.repeat(repeatNum);
}
console.log(repeatStr(6, "I"));