console.log("---------FUNCTIONS---------");

// console.log("hello");

// create a function input -string output-count of vowels
// function countvowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       count++;
//     } else {
//       continue;
//     }
//   }
//   return count;
// }

// let totalVowels = countvowels("aeiou");
// console.log(totalVowels);

// console.log("Q2");

// let countvowels = (str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     ) {
//       count++;
//     } else {
//       continue;
//     }
//   }
//   return count;
// }


let arr = [100,25,38,47,51,60,73];

// arr.forEach(function printVal(val) {
//     console.log(val);
// })
// console.log("----------------------lol-----------");
// arr.forEach(function sqVal(val){
//     console.log(val**2);
// })


// let newarr = arr.map((val)=>{
//     return val**2;
// })

// console.log(newarr);

let newarr = arr.filter((val) => {
    return val > 50;
})
console.log(newarr);
