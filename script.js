const lettersCount = (str) => {
    let lowReg = str.toLowerCase();
    let arrFromStr = lowReg.split('');

    let result = {};
    arrFromStr.forEach(function (a) {
        if (result[a] != undefined) {
            ++result[a];
        } else {
            result[a] = 1;
        }
    })
    for (let key in result) {
        key = result[key];
    }
    return result;

};
// console.log(lettersCount('aAAbbccde'));
// {
//    a: 3,
//    b: 2,
//    c: 2,
//    d: 1,
//    e: 1,
// }



// const areBracketsBalanced = (str) => {

//     let arrSplit = str.split('');
//     arrSplit.sort()
//     console.log(arrSplit)
// };
// console.log(areBracketsBalanced('(())()'))

//findAllIdx([1,0,1,0,0,1], 0) // [1,3,4]
//findAllIdx([1,1], 0) // []
const areBracketsBalanced = (str) => {
    let resultArr = [];
    let arr = str.split('');
    console.log(arr);
    let filterOpenSymbol = arr.filter((item) => {
        return item == '(';
    });
    let filterCloseSymbol = arr.filter((item) => {
        return item == ')';
    });

    if (filterOpenSymbol.length == filterCloseSymbol.length) {
        return true;
    } else if (str = '') {
        return true;
    } else {
        return false;
    }
};
console.log(areBracketsBalanced(''))