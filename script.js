// function capitalize(str) {
//     let littleSymbolStr = str.toLowerCase();
//     let resultArr = littleSymbolStr.split(' ');
//     let controllArr = resultArr.map(upPer);
//     function upPer(value) {
//         return value[0].toUpperCase() + value.substr(1);
//     }
//     let resultStr = controllArr.join(' ')
//     return resultStr;

// }
// const str = 'sOme RanDoM sTRING';
// console.log(capitalize(str)); //Some Random String

// const reverseLongWords = (str) => {

//     let arrInitial = str.split(' ');
//     console.log(arrInitial);
//     let controllArr = arrInitial.map((value) => {
//         if (value.length > 4) {
//             let elArr = value.substr(0).split('').reverse().join('');
//             return elArr
//         } else {
//             return value;
//         }

//     })
//     let resultStr = controllArr.join(' ')
//     return resultStr;
// };

// const str = 'This is another test';
// console.log(reverseLongWords(str))



// Вставляет символ в конец строки 
function wrapInParagraphInEnd(str,symbol,index){

    return str.substring(0,index) + symbol;
}

function wrapInParagraphInStart(str,symbol,index) {
    return str.substring(0,index) + symbol ;
}

const text = `some`;
// console.log(wrapInParagraphInEnd(text,`</p>`, text[text.length]));
// console.log(wrapInParagraphInStart(text,`<p>`, 0))

function wrapInStr(str) {

    str = wrapInParagraphInStart(str,`</p>`, 0) + wrapInParagraphInEnd(str,`</p>`, str[str.length]);
    return str;
}
console.log(wrapInStr(text))